'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useEffect, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { submitLead } from '@/app/actions';
import { Button } from '@/components/ui/Button';
import { bestTimeOptions, fundingOptions, leadFormSchema, preferredClassOptions, type LeadFormValues } from '@/lib/lead';
import { trackEvent } from '@/lib/analytics';
import { cn } from '@/lib/utils';

type LeadFormProps = {
  variant?: 'compact' | 'expanded';
  className?: string;
};

export function LeadForm({ variant = 'compact', className }: LeadFormProps) {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      preferredClass: 'Not sure yet',
      funding: 'Payment plan',
      bestTime: 'Morning',
      company: ''
    }
  });

  useEffect(() => {
    if (status?.ok) trackEvent('form_submit', { form: variant });
  }, [status, variant]);

  const onSubmit = (values: LeadFormValues) => {
    const data = new FormData();
    Object.entries(values).forEach(([key, value]) => data.append(key, value ?? ''));

    startTransition(async () => {
      const result = await submitLead({ ok: false, message: '' }, data);
      setStatus(result);
      if (result.ok) reset();
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('grid gap-4', className)} noValidate>
      <input className="hidden" tabIndex={-1} autoComplete="off" {...register('company')} aria-hidden="true" />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input {...register('name')} autoComplete="name" className="input-control" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input {...register('email')} type="email" autoComplete="email" className="input-control" />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone" error={errors.phone?.message}>
          <input {...register('phone')} type="tel" autoComplete="tel" className="input-control" />
        </Field>
        <Field label="Best time to call" error={errors.bestTime?.message}>
          <select {...register('bestTime')} className="input-control">
            {bestTimeOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Preferred class" error={errors.preferredClass?.message}>
        <div className="grid gap-2 sm:grid-cols-3">
          {preferredClassOptions.map((option) => (
            <label key={option} className="flex min-h-11 cursor-pointer items-center gap-2 rounded-sm border border-asphalt-900/15 bg-chrome px-3 text-sm font-semibold">
              <input type="radio" value={option} {...register('preferredClass')} />
              {option}
            </label>
          ))}
        </div>
      </Field>
      <Field label="Funding" error={errors.funding?.message}>
        <select {...register('funding')} className="input-control">
          {fundingOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </Field>
      <Field label="Message" error={errors.message?.message}>
        <textarea
          {...register('message')}
          rows={variant === 'expanded' ? 5 : 3}
          className="input-control resize-y"
          placeholder="Tell us what you want help with."
        />
      </Field>
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-asphalt-500">Protected consultation request.</p>
      <Button type="submit" className="w-full" magnetic eventLabel={`lead_form_${variant}`}>
        {isPending ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending
          </>
        ) : (
          'Send Free Consultation'
        )}
      </Button>
      {status && (
        <p
          className={cn(
            'rounded-sm border px-4 py-3 text-sm font-semibold',
            status.ok ? 'border-amber-500/50 bg-amber-500/15 text-asphalt-900' : 'border-signal-500/40 bg-signal-500/10 text-signal-700'
          )}
          role="status"
        >
          {status.message}
        </p>
      )}
    </form>
  );
}

type FieldProps = {
  label: string;
  error?: string;
  children: React.ReactNode;
};

function Field({ label, error, children }: FieldProps) {
  return (
    <label className="grid gap-2">
      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-asphalt-700">{label}</span>
      {children}
      {error && <span className="text-sm font-semibold text-signal-700">{error}</span>}
    </label>
  );
}
