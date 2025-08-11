<template>
  <v-card class="trezo-card">
    <div class="v-card-header mb-4">
      <h5 class="mb-0">Reordering Lists Drag & Drop</h5>
    </div>
    <div class="example-list" @dragover.prevent @drop="drop">
      <div
        class="example-list-box"
        v-for="(drag, index) in drags"
        :key="drag"
        @dragstart="dragStart(index)"
        @dragend="dragEnd(index)"
        @dragover.prevent
        @drop="dragDrop(index)"
        draggable="true"
      >
        {{ drag }}
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "ReorderingListsDragDrop",
  data() {
    return {
      drags: [
        "Episode I - The Phantom Menace",
        "Episode II - Attack of the Clones",
        "Episode III - Revenge of the Sith",
        "Episode IV - A New Hope",
        "Episode V - The Empire Strikes Back",
        "Episode VI - Return of the Jedi",
        "Episode VII - The Force Awakens",
        "Episode VIII - The Last Jedi",
        "Episode IX – The Rise of Skywalker",
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
        const [movedItem] = this.drags.splice(this.dragIndex, 1);
        this.drags.splice(targetIndex, 0, movedItem);
        this.dragIndex = null;
      }
    },
    drop(event) {
      event.preventDefault();
    },
  },
};
</script>

<style lang="scss" scoped>
.example-box {
  cursor: move;
  width: 150px;
  height: 150px;
  z-index: 2221;
  display: flex;
  text-align: center;
  border-radius: 4px;
  position: relative;
  align-items: center;
  justify-content: center;
  border: solid 1px #cccccc;
  color: rgba(0, 0, 0, 0.87);
  background: var(--whiteColor);
  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  &:active {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
}
.example-list {
  background: var(--whiteColor);
  border: solid 1px #eeeeee;
  border-radius: 5px;
  min-height: 60px;
  overflow: hidden;
  display: block;

  .example-list-box {
    cursor: move;
    display: flex;
    padding: 20px;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    color: var(--paragraphColor);
    background: var(--whiteColor);
    justify-content: space-between;

    &:last-child {
      border: none;
    }
  }
  &.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
