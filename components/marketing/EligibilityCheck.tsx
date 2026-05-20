'use client';

import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/Button';

const checks = [
  ['age', "I'm 18 or older", 'payment plan'],
  ['license', 'I have a valid driver license', 'payment plan'],
  ['career', "I'm unemployed and looking to change careers", 'WIA/EDD'],
  ['injury', 'I was injured at work', 'Workers Comp or DOR'],
  ['assistance', "I'm on General Assistance", 'SSA'],
  ['selfpay', 'I want to pay out of pocket', '$1,000 down payment plan']
] as const;

export function EligibilityCheck() {
  const [selected, setSelected] = useState<string[]>([]);
  const recommendation = useMemo(() => {
    const found = checks.find(([id]) => selected.includes(id));
    return found?.[2] || 'payment plan';
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
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-amber-400">Funding direction</p>
          <p className="mt-4 font-display text-5xl uppercase leading-none tracking-wide">Talk to us about {recommendation}.</p>
          <p className="mt-4 text-steel-300">This checklist is only a guide. An enrollment advisor can talk through your funding options.</p>
        </div>
        <Button href="/contact" className="mt-8" variant="dark" eventLabel="eligibility_check">
          Open consultation form
        </Button>
      </div>
    </div>
  );
}
