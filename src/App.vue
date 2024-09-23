<template>
  <h1 class="text-bold m-5">Show Todos</h1>

  <!-- Button to open the dialog -->
  <Button
    @click="showDialog = true" 
    :variant="'outline'"
    theme="green"
    size="sm"
    label="Show Dialogue"
    :loading="todoList.loading"
    :loadingText="'Loading...'"
    :disabled="todoList.loading"
    class="m-5"
  ></Button>

  <!-- Loading Text -->
  <LoadingText v-if="todoList.loading" text="Loading..." />

  <div v-else>
    <p>No todos found.</p>
  </div>

  <!-- ListView to display data -->
  <ListView
    :options="{
      selectable: false,
      resizeColumn: true,
      emptyState: {
        title: 'No TODos found',
        description: 'Create a new ToDo',
        button: {
          label: 'New record',
          variant: 'solid',
          onClick: () => console.log('New record')
        }
      }
    }"
    :columns="[
      { label: 'Description', key: 'description' },
      { label: 'Priority', key: 'priority' }
    ]"
    :rows="todoList.data" 
  />

  <!-- Frappe Dialog Component -->
  <Dialog
    v-model="showDialog"
    title="New ToDo"
    @close="showDialog = false"
  >
    <!-- Content of the dialog -->
    <template #body-content>
      <FormControl
        label="Description"
        :type="'textarea'"
        size="sm"
        v-model="inputValue"
        placeholder="Enter description"
      />
    </template>

    <!-- Actions/Buttons at the bottom of the dialog -->
    <template #footer-content>
      <Button
        label="Save"
        variant="solid"
        @click="createTodo"
      />
    </template>
  </Dialog>
  <ErrorMessage :message="todoList.insert.error" />
</template>

<script>
import { Button, LoadingText, ListView, Dialog, FormControl, ErrorMessage } from 'frappe-ui';
import { createListResource } from 'frappe-ui';
import {confetti} from 'canvas-confetti';

export default {
  components: {
    Button,
    LoadingText,
    ListView,
    Dialog,
    FormControl,
    confetti,
    ErrorMessage
  },

  data() {
    return {
      todoList: createListResource({
        doctype: "ToDo",
        fields: ["name", "description", "priority"],
        filters: { status: "Open" },
        auto: true,
        insert:{
          onSuccess(){
            confetti({
              particleCount:1000,
              spread: 70,
              origin: { y: 0.6 }
            });
        }

      }}),
      showDialog: false,
      inputValue: ""
    };
  },

  methods: {
    async createTodo() {
      // Add the new ToDo item with a description and priority
      await this.todoList.insert({
        description: this.inputValue,
        priority: "High"
      });
      // Close the dialog
      this.showDialog = false;
      // Clear input after submission
      this.inputValue = "";
    }
  }
};
</script>
