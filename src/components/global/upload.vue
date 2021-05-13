<template>
  <div class="box" :style="{'width': width + 'px'}">
    <label for="upload">
      <div
        class="upload-area"
        :style="{'height':height + 'px'}">
      上传
      <i class="iconfont icon-add"></i>
      <slot></slot>
      </div>
    </label>
    <div v-if="showFileName" class="file-name">{{fileName}}</div>
    <input id="upload" :accept="tansformType" style="display: none" @change="uploadChange" type="file"/>
  </div>
</template>
<script>
export default {
  props: {
    height: {
      type: String,
      default: '150'
    },
    width: {
      type: String,
      default: '150'
    },
    showFileName: {
      type: Boolean,
      default: true
    },
    accept: {
      type: Array,
      default () {
        return ['.png', '.jpeg', '.jpg']
      }
    }
  },
  computed: {
    tansformType () {
      return this.accept.join(',')
    }
  },
  data () {
    return {
      fileName: '',
      file: null
    }
  },
  methods: {
    uploadChange (e) {
      let fileInfo = e.target.files[0]
      this.fileInfo = fileInfo
      this.fileName = fileInfo.name
    }
  }
}
</script>
<style lang="less" scoped>
.upload-area {
  cursor: pointer;
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px dotted #ccc;
  &:hover {
    border-color: @sys-theme;
  }
}
.file-name {
  font-size: 12px;
  color: #ccc;
  padding: 5px;
}
.box {
  display: inline-block;
}
</style>
