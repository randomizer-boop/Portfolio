// Порядок в списке = порядок на сайте; номера 01 / 02 / 03 проставляются по нему.
import starwise from "./starwise";
import chinashipments from "./chinashipments";
import pome from "./pome";

export const PROJECTS = [pome, starwise, chinashipments].map((project, i) => ({
  ...project,
  num: String(i + 1).padStart(2, "0"),
}));
