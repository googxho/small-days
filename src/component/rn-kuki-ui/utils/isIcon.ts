import type { IconNames } from '../../rn-kuki-icons';
import isString from 'lodash-es/isString';

export const isIcon = (icon: IconNames | React.ReactNode): icon is IconNames => isString(icon);
