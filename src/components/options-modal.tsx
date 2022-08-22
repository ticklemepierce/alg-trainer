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
import { IBaseStep, IStepStorage } from "../puzzles";

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
            {/* TODO make this a loop */}
            <FormControlLabel
              control={
                <Switch
                  onChange={updateOptions}
                  name={"learning-first"}
                  checked={stepStorage.options["learning-first"]}
                />
              }
              label={"List 'Learning' cases first"}
            />
            <FormControlLabel
              control={
                <Switch
                  onChange={updateOptions}
                  name={"learned-last"}
                  checked={stepStorage.options["learned-last"]}
                />
              }
              label={"List 'Learned' cases last"}
            />
            {/* TODO disable these options if not applicable? */}
            <FormControlLabel
              control={
                <Switch
                  onChange={updateOptions}
                  name={"exclude-unstarted"}
                  checked={stepStorage.options["exclude-unstarted"]}
                />
              }
              label={"Exclude 'Unstarted' cases from trainer"}
            />
            <FormControlLabel
              control={
                <Switch
                  onChange={updateOptions}
                  name={"exclude-learned"}
                  checked={stepStorage.options["exclude-learned"]}
                />
              }
              label={"Exclude 'Learned' cases from trainer"}
            />
          </FormGroup>
        </FormControl>
      </DialogContent>
    </Dialog>
  );
};
