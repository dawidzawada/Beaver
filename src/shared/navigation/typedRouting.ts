import { CodeFormat } from "@domain/Code/model/CodeFormat";
import { router, useLocalSearchParams } from "expo-router";

export type Routes = "/list" | "/choose-type" | "/add-edit" | "/scanner" | "/code-overview" | "/beaver";

export interface RoutesTypes extends Record<Routes, object | undefined> {
  "/list": undefined;
  "/choose-type": undefined;
  "/add-edit": undefined;
  "/scanner": undefined;
  "/code-overview": { type: CodeFormat; value?: string; editMode?: boolean };
  "/beaver": undefined;
}

export const routerPush = (pathname: Routes, params?: RoutesTypes[typeof pathname]) => {
  return router.push({ pathname, params });
};

export const useTypedParams = (pathname: Routes) => {
  const params = useLocalSearchParams();
  return params as unknown as Exclude<RoutesTypes[typeof pathname], undefined>;
};
