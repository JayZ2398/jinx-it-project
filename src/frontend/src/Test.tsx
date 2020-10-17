import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Block } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
});

function ClassesNesting() {
  const classes = useStyles();

  return (
    <Block classes={{
      root: classes.root, // class name, e.g. `classes-nesting-root-x`
      // label: classes.label, // class name, e.g. `classes-nesting-label-x`
    }}>
      <Button
      >
        classes nesting
    </Button>
    </Block>
  );
}

export default function Test() {
  return (
    <div>
      <div style={{ height: '100px' }} />
      <ClassesNesting />
      <div />
    </div>
  )
}