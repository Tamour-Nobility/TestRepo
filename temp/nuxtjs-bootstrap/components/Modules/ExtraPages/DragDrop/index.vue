<template>
  <div class="row justify-content-center">
    <div class="col-lg-12">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4 pb-0">
          <h4 class="fs-18 mb-4">Grid Drag & Drop</h4>

          <div class="row js-grid cursor-move" @dragover.prevent @drop="drop">
            <div
              class="col-lg-3 col-sm-6"
              v-for="(drag, index) in drags.slice(0, 8)"
              :key="drag"
              @dragstart="dragStart(index)"
              @dragend="dragEnd(index)"
              @dragover.prevent
              @drop="dragDrop(index)"
              draggable="true"
            >
              <div
                :class="[
                  'card border-0 rounded-3 mb-4 text-center bg-for-dark-mode',
                  drag.bgClass,
                ]"
              >
                <div class="card-body p-5">
                  <h4 :class="['fs-18 fw-semibold mb-0', drag.texColor]">
                    {{ drag.title }}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-12">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <h4 class="fs-18 mb-4">List Drag & Drop</h4>

          <ul
            class="ps-0 mb-0 list-unstyled o-sortable cursor-move"
            @dragover.prevent
            @drop="drop"
          >
            <li
              v-for="(drag, index) in drags"
              :key="drag"
              @dragstart="dragStart(index)"
              @dragend="dragEnd(index)"
              @dragover.prevent
              @drop="dragDrop(index)"
              draggable="true"
              :class="['p-4 rounded-2 mb-3', drag.bgClass]"
            >
              <span :class="['fs-16 fw-semibold', drag.texColor]">
                {{ drag.title }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.min.css";

interface DragItem {
  title: string;
  bgClass: string;
  texColor: string;
}

export default defineComponent({
  name: "DragDrop",
  setup() {
    onMounted(() => {
      Prism.highlightAll();
    });

    const drags = ref<DragItem[]>([
      { title: "Drog & Drop Me", bgClass: "bg-body", texColor: "" },
      {
        title: "Drog & Drop Me",
        bgClass: "bg-secondary",
        texColor: "text-white",
      },
      {
        title: "Drog & Drop Me",
        bgClass: "bg-success",
        texColor: "text-white",
      },
      { title: "Drog & Drop Me", bgClass: "bg-danger", texColor: "text-white" },
      {
        title: "Drog & Drop Me",
        bgClass: "bg-warning",
        texColor: "text-white",
      },
      { title: "Drog & Drop Me", bgClass: "bg-info", texColor: "text-white" },
      { title: "Drog & Drop Me", bgClass: "bg-light", texColor: "text-white" },
      { title: "Drog & Drop Me", bgClass: "bg-dark", texColor: "text-white" },
      {
        title: "Drog & Drop Me",
        bgClass: "bg-primary",
        texColor: "text-white",
      },
    ]);

    const dragIndex = ref<number | null>(null);

    const dragStart = (index: number) => {
      dragIndex.value = index;
    };

    const dragEnd = (index: number) => {
      dragIndex.value = null;
    };

    const dragDrop = (targetIndex: number) => {
      if (dragIndex.value !== null && targetIndex !== dragIndex.value) {
        const [movedItem] = drags.value.splice(dragIndex.value, 1);
        drags.value.splice(targetIndex, 0, movedItem);
        dragIndex.value = null;
      }
    };

    const drop = (event: DragEvent) => {
      event.preventDefault();
    };

    return {
      drags,
      dragStart,
      dragEnd,
      dragDrop,
      drop,
    };
  },
});
</script>
