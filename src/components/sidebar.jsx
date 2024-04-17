import React, { useState } from "react";

function SideBar() {
  return (
    <div class="grid grid-cols-2 gap-4">
      <div class="bg-gray-200 p-4">Sidebar Content</div>

      <div class="bg-gray-400 p-4">Dashboard Content</div>
    </div>
  );
}
export default SideBar;
