import React, { useState } from "react";
import styled from "styled-components";

import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";

import { v4 as uuidv4 } from "uuid";

// import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

import CreateIcon from "@material-ui/icons/Create";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import LinkIcon from "@material-ui/icons/Link";
import LaunchIcon from "@material-ui/icons/Launch";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import { LinkIconMenu, PrimaryButton, SecondaryButton, useLink } from "jinxui";
import { TLinkData } from "jinxui/types";

const LinkInputDiv = styled.div`
  display: grid;
  row-gap: 30px;
`;

const LinkInputInnerDiv = styled.div`
  display: flex;
  align-items: baseline;
`;

const PublishCancelDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  align-items: end;
  justify-content: space-around;
  margin: 5px;
  padding: 5px;
  width: 100%;
`;

type TLinkDialog = {
  link?: TLinkData;
  setAnchoEl?: any;
};
const LinkDialog = React.forwardRef((props: TLinkDialog, ref: any) => {
  const [open, setOpen] = useState(false);
  const [linkIcon, setLinkIcon] = useState(
    props.link ? props.link.icon : "None"
  );
  const { updateLink } = useLink();

  const handleClickOpen = () => {
    setOpen(true);
  };

  // The link to use if not editing an existing one
  const newLink: TLinkData = {
    title: "",
    address: "",
    icon: linkIcon,
    id: uuidv4(),
  };

  // Set up the link to be worked on
  const activeLink = props.link ? props.link : newLink;

  // Set up the button text
  const okayText = props.link ? "OK" : "ADD";

  // Add new link to list / update existing
  const handleUpdate = () => {
    updateLink(activeLink)
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // The 'OK' button
  const ActivationButton = () => {
    if (props.link) {
      return (
        <MenuItem
          onClick={() => {
            handleClickOpen();
            if (props.setAnchoEl) {
              props.setAnchoEl(null);
            }
          }}
        >
          <ListItemIcon>
            <CreateIcon />
          </ListItemIcon>
          <ListItemText primary="Edit" />
        </MenuItem>
      );
    } else {
      return (
        <Tooltip title="Add new external link" arrow>
          <Button
            onClick={handleClickOpen}
            color="primary"
            variant="text"
            disableElevation
          >
            <AddCircleIcon />
          </Button>
        </Tooltip>
      );
    }
  };

  return (
    <>
      <ActivationButton />
      <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title">
        <Formik
          initialValues={{
            linkTitle: activeLink.title,
            linkAddress: activeLink.address,
          }}
          onSubmit={(values) => {
            activeLink.title = values.linkTitle;
            activeLink.address = values.linkAddress;
            activeLink.icon = linkIcon;
            handleUpdate();
          }}
        >
          <Form>
            <DialogTitle id="link-dialog-title">Link</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Note: Leave Link Title blank to display just the icon.
              </DialogContentText>
              <LinkInputDiv>
                <LinkInputInnerDiv>
                  <LinkIconMenu linkIcon={linkIcon} setLinkIcon={setLinkIcon} />
                  <Field
                    component={TextField}
                    name="linkTitle"
                    label="Link Title"
                    fullWidth
                    color="secondary"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <CreateIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </LinkInputInnerDiv>
                <Field
                  component={TextField}
                  name={"linkAddress"}
                  label={"Link Address"}
                  fullWidth
                  color="secondary"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <CreateIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </LinkInputDiv>
            </DialogContent>
            <DialogActions>
              <PublishCancelDiv>
                <div>
                  <PrimaryButton type="submit">{okayText}</PrimaryButton>
                </div>
                <div>
                  <SecondaryButton type="button" onClick={handleClose}>
                    Cancel
                  </SecondaryButton>
                </div>
              </PublishCancelDiv>
            </DialogActions>
          </Form>
        </Formik>
      </Dialog>
    </>
  );
});

export default LinkDialog;
