import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label
  } from 'reactstrap';
import { FormEvent } from 'react';
import { SanctuaryInfo, SetState } from 'types';
// import styles from './main-menu.module.scss';

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
      <Form onSubmit={onSubmit}>
        <FormGroup row>
          <Label for={FormFields.rank} md={4}>Sanctuary Rank</Label>
          <Col>
            <Input id={FormFields.rank} type="number" min="1" max="10" defaultValue={sanctuary.rank} />
          </Col>
        </FormGroup>
        <div className="text-end">
          <Button type="submit" color="primary">Save</Button>
        </div>
      </Form>
    </>
  );
}
