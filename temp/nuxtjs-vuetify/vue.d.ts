import { ComponentCustomProperties } from "@vue/runtime-core";
import ApexCharts from "apexcharts";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $apexcharts: typeof ApexCharts;
  }
}
