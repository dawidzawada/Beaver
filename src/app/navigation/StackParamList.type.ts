import {BwipCodeTypes} from 'bwip-js';

export type StackParamList = {
  List: undefined;
  CodeOverview: undefined;
  Scanner: undefined;
  ChooseType: undefined;
  AddEditCode: {type: BwipCodeTypes; value?: string; editMode?: boolean};
  Beaver: undefined;
};
