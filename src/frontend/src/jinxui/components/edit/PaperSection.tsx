import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import SaveSharpIcon from "@material-ui/icons/SaveSharp";
import { PaperSectionBase, PaperSectionDiv, useUser } from "jinxui";
import { TEditSection } from "jinxui/types";
import { InputAdornment } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import Tooltip from "@material-ui/core/Tooltip";

const StyledDivOuter = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 46px;
`;

const StyledDivLeft = styled.div`
  padding-left: 0px;
  display: flex;
  align-items: center;
`;

const StyledDivCenter = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`;

const StyledDivRight = styled.div`
  padding-right: 0px;
  display: flex;
  justify-content: right;
  justify-self: end;
  align-items: center;
`;

// Required for disabled buttons
const TooltipDiv = styled.div`
  display: flex;
`;

const StyledButton = styled(Button)`
  width: 10px;
`;

type TPaperSection = {
  section: any;
  sections: any;
  setSections: any;
  children: any;
  hideEditButtons?: boolean;
  handleTitleChange: any;
  handlePublish: any;
};

const PaperSection = (props: TPaperSection) => {
  const { savingState } = useUser();
  const [isSaving, setIsSaving] = useState(false);
  const index = props.sections.findIndex(
    (p: TEditSection) => p.uid === props.section.uid
  );
  const handleDelete = () => {
    props.setSections([
      ...props.sections.slice(0, index),
      ...props.sections.slice(index + 1),
    ]);
  };
  let deleteDisabled = false;
  let upArrowDisabled = false;
  let downArrowDisabled = false;
  if (props.sections.length === 1) {
    deleteDisabled = true;
  }
  if (index === 0) {
    upArrowDisabled = true;
  }
  if (index === props.sections.length - 1) {
    downArrowDisabled = true;
  }

  useEffect(() => {
    setIsSaving(savingState);
  }, [savingState]);

  const handleMoveUp = () => {
    if (index === 0) {
      return;
    }
    const curr_sections = props.sections;
    const top = curr_sections.slice(0, index - 1);
    const one_above = curr_sections.slice(index - 1, index);
    const rest = curr_sections.slice(index + 1);
    props.setSections(top.concat(props.section, one_above, rest));
  };

  const handleMoveDown = () => {
    if (index === props.sections.length - 1) {
      return;
    }
    const curr_sections = props.sections;
    const top = curr_sections.slice(0, index);
    const one_below = curr_sections.slice(index + 1, index + 2);
    const rest = curr_sections.slice(index + 2);
    props.setSections(top.concat(one_below, props.section, rest));
  };

  return (
    <PaperSectionDiv id={props.section.uid}>
      <StyledDivOuter>
        <StyledDivLeft>
          {/* Title */}

          <TextField
            name={props.section.uid}
            defaultValue={props.section.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.handleTitleChange(e, props.section.uid)
            }
            placeholder="Section Title"
            color="secondary"
            InputProps={{
              /*disableUnderline: false*/
              startAdornment: (
                <InputAdornment position="start">
                  <CreateIcon />
                </InputAdornment>
              ),
            }}
          />
        </StyledDivLeft>
        <StyledDivCenter></StyledDivCenter>

        {/* Modify section list buttons */}

        <StyledDivRight>
          <Tooltip title="Save portfolio" arrow>
            <TooltipDiv >
              <StyledButton
                size="medium"
                style={{ minWidth: 40 }}
                onClick={props.handlePublish}
                disabled={isSaving}
              >
                <SaveSharpIcon />
              </StyledButton>
            </TooltipDiv>
          </Tooltip>
          <Tooltip title="Move section up" arrow>
            <TooltipDiv>
              <StyledButton
                size="medium"
                style={{ minWidth: 40 }}
                disabled={upArrowDisabled}
                onClick={handleMoveUp}
              >
                <ArrowUpwardIcon />
              </StyledButton>
            </TooltipDiv>
          </Tooltip>
          <Tooltip title="Move section down" arrow>
            <TooltipDiv>
              <StyledButton
                size="medium"
                style={{ minWidth: 40 }}
                disabled={downArrowDisabled}
                onClick={handleMoveDown}
              >
                <ArrowDownwardIcon />
              </StyledButton>
            </TooltipDiv>
          </Tooltip>

          <Tooltip title="Delete this section" arrow>
            <TooltipDiv>
              <StyledButton
                size="medium"
                style={{ minWidth: 40 }}
                onClick={handleDelete}
                disabled={deleteDisabled}
              >
                <DeleteOutlinedIcon />
              </StyledButton>
            </TooltipDiv>
          </Tooltip>
        </StyledDivRight>
      </StyledDivOuter>
      <PaperSectionBase elevation={3} variant="outlined" square>
        {props.children}
      </PaperSectionBase>
    </PaperSectionDiv>
  );
};

export default PaperSection;
