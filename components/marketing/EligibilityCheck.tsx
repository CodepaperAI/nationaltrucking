'use client';

import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/Button';

const checks = [
  ['installments', 'I want to split tuition into payments', 'installment payment options'],
  ['starter', 'I want to ask about the $1,000 starter payment', 'the starter payment and schedule'],
  ['paperwork', 'I already have agency or voucher paperwork', 'agency/voucher paperwork review'],
  ['selfpay', 'I plan to pay out of pocket', 'self-pay timing and total cost'],
  ['unsure', "I'm not sure which payment path fits", 'a payment-options consultation']
] as const;

export function EligibilityCheck() {
  const [selected, setSelected] = useState<string[]>([]);
  const recommendation = useMemo(() => {
    const found = checks.find(([id]) => selected.includes(id));
    return found?.[2] || 'a payment-options consultation';
  }, [selected]);

  return (
    <div className="grid gap-6 rounded-sm border border-asphalt-900/10 bg-chrome p-5 shadow-hard lg:grid-cols-[1.2fr_0.8fr] lg:p-8">
      <div className="grid gap-3">
        {checks.map(([id, label]) => (
          <label key={id} className="flex min-h-12 cursor-pointer items-center gap-3 rounded-sm border border-asphalt-900/10 bg-steel-100 px-4 font-semibold text-asphalt-800">
            <input
              type="checkbox"
              checked={selected.includes(id)}
              onChange={(event) =>
                setSelected((current) => (event.target.checked ? [...current, id] : current.filter((item) => item !== id)))
              }
            />
            {label}
          </label>
        ))}
      </div>
      <div className="flex flex-col justify-between rounded-sm bg-asphalt-900 p-6 text-chrome">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-amber-400">Payment direction</p>
          <p className="mt-4 font-display text-5xl uppercase leading-none tracking-wide">Talk to us about {recommendation}.</p>
          <p className="mt-4 text-steel-300">This checklist is only a guide. An enrollment advisor can review payment options and paperwork; it is not an approval decision.</p>
        </div>
        <Button href="/contact" className="mt-8" variant="dark" eventLabel="eligibility_check">
          Open consultation form
        </Button>
      </div>
    </div>
  );
}
