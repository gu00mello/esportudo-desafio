import {RootStackParamList, RootDrawerParamList} from './Router';

declare global {
    namespace ReactNavigation {
        interface RootParamList
            extends RootStackParamList,
                RootDrawerParamList {
            [key: string]: any;
        }
    }
}
