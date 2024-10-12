import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import ToDoList from "./components/ToDoList";

export default function Main() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
}
