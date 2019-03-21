import * as React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';
import Button, { ButtonProps } from '@material-ui/core/Button';

const styles = createStyles({
  button: {
    backgroundColor: '#3BACA3',
    borderRadius: '3px',
    border: 0,
    color: 'white',
    height: '48px',
    padding: '0 30px'
  },
  buttonDisabled: {
    background: '#d4c9d7'
  }
});

interface Props extends Omit<ButtonProps, 'classes'>, WithStyles<typeof styles> {}

export default withStyles(styles)(({ classes, ...rest }: Props) => (
  <Button
    classes={{ root: classes.button, disabled: classes.buttonDisabled }}
    type="submit"
    variant="contained"
    fullWidth
    {...rest}
  />
));
