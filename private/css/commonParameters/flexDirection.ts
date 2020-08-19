import { FlexDirectionProperty, } from '../../helpers/decodeCommonParameters';
import f from '../f';
import fb from '../fb';

function flexDirection (): string {
  return fb(
    (breakpoint) => f(
      ($) => `.${breakpoint.left}flex-direction-${$} {\n  flex-direction: ${$} !important;\n}`,
      FlexDirectionProperty
    )
  );
}

export default flexDirection;
