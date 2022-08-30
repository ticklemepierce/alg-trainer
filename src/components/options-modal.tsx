import { ChangeEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  FormGroup,
  FormControlLabel,
  Switch,
  IconButton,
  FormControl,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IBaseStep, IStepStorage, Options, OptionKeys } from "../puzzles";

const options: Options = [
  {
    name: "learning-first",
    label: "List 'Learning' cases first",
  },
  {
    name: "learned-last",
    label: "List 'Learned' cases last",
  },
  {
    name: "exclude-unstarted",
    label: "Exclude 'Unstarted' cases from trainer",
  },
  {
    name: "exclude-learned",
    label: "Exclude 'Learned' cases from trainer",
  },
];

export const OptionsModal = ({
  handleClose,
  stepStorage,
  setStepStorage,
  step,
}: {
  handleClose: () => void;
  stepStorage: IStepStorage;
  setStepStorage: Function;
  step: IBaseStep;
}) => {
  const updateOptions = (event: ChangeEvent<HTMLInputElement>) => {
    setStepStorage({
      ...stepStorage,
      options: {
        ...stepStorage.options,
        [event.target.name]: event.target.checked,
      },
    });
  };

  const updateFilters = (event: ChangeEvent<HTMLInputElement>) => {
    setStepStorage({
      ...stepStorage,
      filters: {
        ...stepStorage.filters,
        [event.target.name]: event.target.checked,
      },
    });
  };

  const checkDisableOption = (optionName: OptionKeys) => {
    if (
      optionName === "exclude-learned" &&
      !Object.values(stepStorage.cases).some(
        (_case) => _case.status === "learned"
      )
    ) {
      return true;
    }
    if (
      optionName === "exclude-unstarted" &&
      !Object.values(stepStorage.cases).some(
        (_case) => _case.status === "learned" || _case.status === "learning"
      )
    ) {
      return true;
    }
    return false;
  };

  return (
    <Dialog open onClose={handleClose}>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[700],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <FormControl component="fieldset" variant="standard">
          <FormGroup>
            {Object.entries(step.filters).map(([filter, displayName]) => (
              <FormControlLabel
                control={
                  <Switch
                    onChange={updateFilters}
                    name={filter}
                    checked={stepStorage.filters[filter]}
                  />
                }
                label={displayName}
                key={filter}
              />
            ))}
            {options.map((option) => (
              <FormControlLabel
                control={
                  <Switch
                    onChange={updateOptions}
                    name={option.name}
                    checked={stepStorage.options[option.name]}
                    disabled={checkDisableOption(option.name)}
                  />
                }
                label={option.label}
              />
            ))}
          </FormGroup>
        </FormControl>
      </DialogContent>
    </Dialog>
  );
};
