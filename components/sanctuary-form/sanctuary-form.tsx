import { Button, NumberInput } from '@mantine/core';
import { FormEvent } from 'react';
import { SanctuaryInfo, SetState } from 'types';

interface SanctuaryFormProps {
  sanctuary: SanctuaryInfo;
  setSanctuary: SetState<SanctuaryInfo>;
}

enum FormFields {
  rank = 'sanctuary-rank',
}

function getValue(id: string): string {
  return (document.getElementById(id) as HTMLInputElement).value;
}

export default function SanctuaryForm({sanctuary, setSanctuary}: SanctuaryFormProps): JSX.Element {
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(e);

    setSanctuary({
      ...sanctuary,
      rank: parseInt(getValue(FormFields.rank)),
    });
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <NumberInput
            id={FormFields.rank}
            min={1}
            max={10}
            defaultValue={sanctuary.rank}
            label="Rank"
        />

        <div className="spacer2"></div>

        <div css={{textAlign: 'end'}}>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </>
  );
}
