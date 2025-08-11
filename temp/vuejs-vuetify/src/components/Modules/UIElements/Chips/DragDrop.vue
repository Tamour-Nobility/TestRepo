<template>
  <v-card class="mb-25 trezo-card">
    <div class="v-card-header mb-4">
      <h5 class="mb-0">Chips Drag and Drop</h5>
    </div>
    <div class="example-chip" @dragover.prevent @drop="drop">
      <v-chip
        class="example-box mr-2"
        v-for="(vegetable, index) in vegetables"
        :key="index"
        @dragstart="dragStart(index)"
        @dragend="dragEnd(index)"
        @dragover.prevent
        @drop="dragDrop(index)"
        draggable="true"
      >
        {{ vegetable.name }}
      </v-chip>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "DragDrop",
  data() {
    return {
      vegetables: [
        { name: "apple" },
        { name: "banana" },
        { name: "strawberry" },
        { name: "orange" },
        { name: "kiwi" },
      ],
      dragIndex: null,
    };
  },
  methods: {
    dragStart(index) {
      this.dragIndex = index;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dragEnd(_index) {
      this.dragIndex = null;
    },
    dragDrop(targetIndex) {
      if (this.dragIndex !== null && targetIndex !== this.dragIndex) {
        const [movedItem] = this.vegetables.splice(this.dragIndex, 1);
        this.vegetables.splice(targetIndex, 0, movedItem);
        this.dragIndex = null;
      }
    },
    drop(event) {
      event.preventDefault();
    },
  },
};
</script>
