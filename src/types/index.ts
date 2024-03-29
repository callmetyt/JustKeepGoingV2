export interface ScreenNavigationProp {
  navigate: (name: string, params?: any) => void;
  goBack: (params?: any) => void;
  reset: (navigationState: any) => void;
  setParams: (routeParams: any) => void;
  setOptions: (screenOptions: any) => void;
  isFocused: () => boolean;
  addListener: (
    type: 'focus' | 'blur' | 'beforeRemove' | 'state',
    event: (e: {data: any; target: any; preventDefault: () => void}) => void,
  ) => void;
  replace: (name: string, params?: any) => void;
  dispatch: (para: any) => void;
}

export interface ScreenRouteProp {
  key: string;
  name: string;
  path: string;
  params: any;
}

export interface usersLoginType {
  userName: string;
  password: string;
}
