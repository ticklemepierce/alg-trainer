import Button from "@mui/material/Button";
import { nestedMenuItemsFromObject, MenuItemData } from "mui-nested-menu";
import { IPuzzle, isSubStep, ISubStep } from "../../puzzles";
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";
import HoverMenu from "material-ui-popup-state/HoverMenu";
// import { useNavigate } from "react-router-dom";

const NavItem = ({ puzzle }: { puzzle: IPuzzle }) => {
  const popupState = usePopupState({
    variant: "popover",
    popupId: puzzle.displayName,
  });
  // const navigate = useNavigate();

  const toMenuItems = (step: ISubStep | IPuzzle, route: string) => {
    return step.steps.map((currStep) => {
      const stepRoute = `${route}/${currStep.slug}`;
      const item: MenuItemData = {
        label: currStep.displayName,
        // callback: () => navigate(stepRoute),
      };
      if (isSubStep(currStep)) {
        item.items = toMenuItems(currStep, stepRoute);
      }
      return item;
    });
  };

  return (
    <>
      <Button
        sx={{
          my: 2,
          color: "white",
          textTransform: "none",
        }}
        {...bindHover(popupState)}
      >
        {puzzle.displayName}
      </Button>
      <HoverMenu {...bindMenu(popupState)}>
        {nestedMenuItemsFromObject({
          menuItemsData: toMenuItems(puzzle, puzzle.slug),
          isOpen: popupState.isOpen,
          handleClose: popupState.close,
        })}
      </HoverMenu>
    </>
  );
};

export default NavItem;
