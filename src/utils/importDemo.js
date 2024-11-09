import { lazy } from "react";

const importDemo = (file) => lazy(() => import(`../components/${file}`));

export default importDemo;
