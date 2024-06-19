import { CodeFormat } from "@domain/Code/model/CodeFormat";
import { router, useLocalSearchParams } from "expo-router";

export type Routes = "/list" | "/choose-type" | "/add-edit" | "/scanner" | "/code-overview" | "/beaver";

export interface RoutesTypes extends Record<Routes, object | undefined> {
  "/list": undefined;
  "/choose-type": undefined;
  "/add-edit": { type: CodeFormat; value?: string; editMode?: boolean };
  "/scanner": undefined;
  "/code-overview": { id: string };
  "/beaver": undefined;
}

export const routerPush = (pathname: Routes, params?: RoutesTypes[typeof pathname]) => {
  return router.push({ pathname, params });
};

export const useTypedParams = <T extends Routes>() => {
  const params = useLocalSearchParams();
  return params as unknown as RoutesTypes[T];
};
