<template>
  <button :class="['button', property1, className]">
    <div :class="['dashboard', divClassName]">{{ text }}</div>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    property1: {
      type: String,
      default: "default",
      validator: function (value) {
        return ["variant-2", "default"].indexOf(value) !== -1;
      },
    },
    className: {
      type: String,
      default: "",
    },
    divClassName: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "Dashboard",
    },
  },
};
</script>

<style>
.button {
  all: unset;
  border: 0.5px solid;
  border-color: #ffffff;
  border-radius: 6px;
  box-sizing: border-box;
  gap: 10px;
  position: relative;
}

.button .dashboard {
  font-family: "Open Sans", Helvetica;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: fit-content;
}

.button.default {
  align-items: flex-start;
  background-color: #486cff;
  box-shadow: 0px 4px 22px -11px #1845c8b2;
  display: inline-flex;
  padding: 10px 20px;
}

.button.variant-2 {
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 9px 8px -11px #1845c814;
  display: flex;
  height: 51px;
  justify-content: center;
  padding: 10px 40px;
  width: 128px;
}

.button.default .dashboard {
  color: #dbe4ff;
  margin-top: -0.5px;
}

.button.variant-2 .dashboard {
  color: #5a86fe;
  margin-left: -18.5px;
  margin-right: -18.5px;
}
</style>
