<template>
  <v-container
    grid-list-lg
    pa-0
  >
    <v-layout wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title class="text-subtitle-2">
            用户
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="list"
            class="elevation-1"
          >
            <template
              slot="items"
              slot-scope="props"
            >
              <td>{{ props.item.name }}</td>
              <td>{{ props.item.age }}</td>
              <td>
                <template v-if="props.item.edit">
                  <v-text-field
                    v-model="props.item.address"
                    autofocus
                    append-icon="replay"
                    @click:append="eg2ResetItem(props.item)"
                  >
                    <v-tooltip
                      slot="append"
                      bottom
                    >
                      <v-icon
                        slot="activator"
                        @click="eg2ResetItem(props.item)"
                      >
                        replay
                      </v-icon>
                      Reset
                    </v-tooltip>
                  </v-text-field>
                </template>
                <span v-else>{{ props.item.address }}</span>
              </td>
              <td class="justify-center">
                <v-icon
                  v-if="!props.item.edit"
                  class="mr-2"
                  @click="eg2EditItem(props.item)"
                >
                  edit
                </v-icon>
                <v-icon
                  v-else
                  class="mr-2"
                  @click="eg2SaveItem(props.item)"
                >
                  save
                </v-icon>
                <v-icon disabled>delete</v-icon>
              </td>
            </template>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>

    <v-dialog
      v-model="dialog"
      max-width="500px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">Edit Item</span>
        </v-card-title>

        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex
                xs12
                sm6
                md4
              >
                <v-text-field
                  v-model="editedItem.name"
                  label="Name"
                ></v-text-field>
              </v-flex>
              <v-flex
                xs12
                sm6
                md4
              >
                <v-text-field
                  v-model="editedItem.age"
                  label="Age"
                ></v-text-field>
              </v-flex>
              <v-flex
                xs12
                sm6
                md4
              >
                <v-text-field
                  v-model="editedItem.address"
                  label="Address"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="close"
          >
            Cancel
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="save"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { deepCopy } from '@/utils/util';

export default {
  name: 'User',
  data() {
    return {
      dialog: false,
      editedIndex: -1,
      editedItem: {},
      headers: [
        { text: '账号', value: 'name', align: 'left', sortable: false },
        { text: 'Email', value: 'email', sortable: false },
        { text: '操作', value: 'actions', sortable: false },
      ],
      list: [],
      preItem: {},
      cachedItem: {},
    };
  },
  created() {
    this.getListData();
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.list.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = {};
        this.editedIndex = -1;
      });
    },
    save() {
      Object.assign(this.list[this.editedIndex], this.editedItem);
      this.close();
    },
    getListData() {
      this.$http.get('/api/user/list').then(res => {
        this.list = res.data.data.list
      })
    },
    /* eslint-disable no-param-reassign */
    eg2EditItem(item) {
      if (this.preItem.edit) {
        this.eg2ResetItem(this.preItem);
      }

      this.preItem = item;
      item.edit = !item.edit;
      this.cachedItem = deepCopy(item);
    },
    eg2SaveItem(item) {
      item.edit = false;
      this.refreshItem();
    },
    eg2ResetItem(item) {
      item.edit = false;
      item.address = this.cachedItem.address;
      this.refreshItem();
    },
    refreshItem() {
      this.cachedItem = {};
      this.preItem = {};
    },
  },
};
</script>
