<template>
  <div>
    <slot name="default"></slot>
  </div>
</template>
<script setup lang="tsx">

const props = defineProps({
  "avatarConfig": {
    type: Object,
  }
})

if (props.avatarConfig) {
  console.log(props.avatarConfig)
  
}

// import pb from "protobufjs";
// import base64 from "base64-js";
// const jsonDescriptor = {
//   nested: {
//     UserInfo: {
//       fields: {
//         user_id: {
//           type: "int32",
//           id: 1,
//         },
//         name: {
//           type: "string",
//           id: 2,
//         },
//         fs_open_id: {
//           type: "string",
//           id: 3,
//         },
//         open_id: {
//           type: "string",
//           id: 4,
//         },
//         dept_name: {
//           type: "string",
//           id: 5,
//         },
//         avatar: {
//           type: "string",
//           id: 6,
//         },
//       },
//     },
//     UserDataList: {
//       fields: {
//         user_info: {
//           rule: "repeated",
//           type: "UserInfo",
//           id: 1,
//         },
//       },
//     },
//   },
// };
// var root = pb.Root.fromJSON(jsonDescriptor);
// fetch("http://172.18.12.155:8000/api/users-pb/normal-pb/?page=1").then(
//   (res) => {
//     res.arrayBuffer().then((buffer0) => {
//       const base64String = btoa(
//         new Uint8Array(buffer0).reduce(
//           (data, byte) => data + String.fromCharCode(byte),
//           ""
//         )
//       );
//       const buffer = atob(base64String);
//       const Response = root.lookupType("UserDataList");
//       let message = Response.decode(new Uint8Array(buffer));
//       const object = Response.toObject(message, {
//         defaults: true,
//         arrays: true, // populates empty arrays (repeated fields) even if defaults=false
//         objects: false, // populates empty objects (map fields) even if defaults=false
//         oneofs: false, // includes virtual oneof fields set to the present field's name
//       });
//       console.log("%csrc\Provider.vue:63 object", "color: #007acc;", object);
//     });
//   }
// );
</script>
