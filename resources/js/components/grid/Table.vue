<template>
  <div class="grid-container">
    <component
      v-if="attrs.top"
      :is="attrs.top.componentName"
      :attrs="attrs.top"
    />
    <el-card 
        shadow="never" 
        :body-style="{ padding: 0 }">
      <div class="grid-top-container">
        <div class="grid-top-container-left">
          <BatchActions
            :routers="attrs.routers"
            :key_name="attrs.keyName"
            :rows="selectionRows"
            :actions="attrs.batchActions"
            v-if="attrs.selection"
          />
          <div class="search-view mr-10" v-if="attrs.quickSearch">
            <el-input
              v-model="quickSearch"
              :placeholder="attrs.quickSearch.placeholder"
              :clearable="true"
              @clear="getData"
              @keyup.enter.native="getData"
            >
              <el-button @click="getData" :loading="loading" slot="append"
                >搜索</el-button
              >
            </el-input>
          </div>
          <div class="flex-c">
            <component
              v-for="(component, index) in attrs.toolbars.left"
              :key="component.componentName + index"
              :is="component.componentName"
              :attrs="component"
            />
          </div>
        </div>
        <div class="grid-top-container-right">
          <component
            v-for="(component, index) in attrs.toolbars.right"
            :key="component.componentName + index"
            :is="component.componentName"
            :attrs="component"
          />
          <el-divider
            direction="vertical"
            v-if="!attrs.attributes.hideCreateButton"
          ></el-divider>
          <div class="icon-actions">
            <el-dropdown trigger="click">
              <el-tooltip
                class="item"
                effect="dark"
                content="密度"
                placement="top"
              >
                <i class="el-icon-rank hover"></i>
              </el-tooltip>
              <el-dropdown-menu slot="dropdown">
                <a @click="attrs.attributes.size = null">
                  <el-dropdown-item>正常</el-dropdown-item>
                </a>
                <a @click="attrs.attributes.size = 'medium'">
                  <el-dropdown-item>中等</el-dropdown-item>
                </a>
                <a @click="attrs.attributes.size = 'small'">
                  <el-dropdown-item>紧凑</el-dropdown-item>
                </a>
                <a @click="attrs.attributes.size = 'mini'">
                  <el-dropdown-item>迷你</el-dropdown-item>
                </a>
              </el-dropdown-menu>
            </el-dropdown>

            <el-tooltip
              class="item"
              effect="dark"
              content="刷新"
              placement="top"
            >
              <i class="el-icon-refresh hover" @click="getData"></i>
            </el-tooltip>
          </div>
        </div>
      </div>
    </el-card>
    <el-card
      class="mt-10"
      shadow="never"
      :body-style="{ padding: 0 }"
      v-loading="loading"
    >
      <div class="filter-form" v-if="attrs.filter.filters.length > 0">
        <el-form
          :inline="true"
          label-suffix="："
          :model="filterFormData"
          v-if="filterFormData"
        >
          <el-form-item
            v-for="(item, index) in attrs.filter.filters"
            :key="index"
            :label="item.label"
          >
            <ItemDiaplsy
              v-model="filterFormData[item.column]"
              :form_item="item"
              :form_items="attrs.filters"
              :form_data="filterFormData"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onFilterSubmit">搜索</el-button>
            <el-button @click="onFilterReset">重置</el-button>
          </el-form-item>
        </el-form>
      </div>

      <div>
        <el-table
          :data="tableData"
          :row-key="attrs.attributes.rowKey"
          :default-sort="default_sort_get"
          :height="attrs.attributes.height"
          :max-height="attrs.attributes.maxHeight"
          :border="attrs.attributes.border"
          :size="attrs.attributes.size"
          :fit="attrs.attributes.fit"
          :show-header="attrs.attributes.showHeader"
          :highlight-current-row="attrs.attributes.highlightCurrentRow"
          :empty-text="attrs.attributes.emptyText"
          :tooltip-effect="attrs.attributes.tooltipEffect"
          :default-expand-all="attrs.attributes.defaultExpandAll"
          @sort-change="onTableSortChange"
          @selection-change="onTableselectionChange"
        >
          <el-table-column
            v-if="attrs.attributes.selection"
            align="center"
            type="selection"
          ></el-table-column>
          <el-table-column v-if="attrs.tree" align="center" width="50">
          </el-table-column>
          <template v-for="column in attrs.columnAttributes">
            <el-table-column
              :type="column.type"
              :key="column.prop"
              :column-key="column.columnKey"
              :prop="column.prop"
              :label="column.label"
              :width="column.width"
              :sortable="column.sortable"
              :help="column.help"
              :align="column.align"
              :fixed="column.fixed"
              :header-align="column.headerAlign"
            >
              <template slot="header" slot-scope="scope">
                <span>{{ scope.column.label }}</span>
                <el-tooltip
                  placement="top"
                  v-if="column.help"
                  :content="column.help"
                >
                  <i class="el-icon-question hover"></i>
                </el-tooltip>
              </template>
              <template slot-scope="scope">
                <ColumnDisplay
                  :scope="scope"
                  :columns="attrs.columnAttributes"
                />
              </template>
            </el-table-column>
          </template>
          <el-table-column
            v-if="!attrs.attributes.hideActions"
            :label="attrs.attributes.actionLabel"
            prop="grid_actions"
            :fixed="attrs.attributes.actionFixed"
            :min-width="attrs.attributes.actionWidth"
            :align="attrs.attributes.actionAlign"
          >
            <template slot="header"></template>
            <template slot-scope="scope">
              <Actions
                v-if="scope.row.grid_actions && !scope.row.grid_actions.hide"
                :action_list="scope.row.grid_actions.data"
                :scope="scope"
                :key_name="attrs.keyName"
              />
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="table-page">
        <el-pagination
          layout="prev, pager, next, jumper,->,total, sizes"
          :hide-on-single-page="false"
          :total="pageData.total"
          :page-size="pageData.pageSize"
          :current-page="pageData.currentPage"
          :page-sizes="attrs.pageSizes"
          :background="attrs.pageBackground"
          @size-change="onPageSizeChange"
          @current-change="onPageCurrentChange"
        />
      </div>
    </el-card>
    <component
      v-if="attrs.bottom"
      :is="attrs.bottom.componentName"
      :attrs="attrs.bottom"
    />
    <DialogForm
      ref="DialogGridFrom"
      v-if="attrs.dialogForm"
      :dialogFormWidth="attrs.dialogFormWidth"
      :dialogForm="attrs.dialogForm"
      :dialogTitle="attrs.dialogTitle"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ColumnDisplay from "./ColumnDisplay";
import Actions from "./Actions/Index";
import BatchActions from "./BatchActions/Index";
import ItemDiaplsy from "../form/ItemDiaplsy";
import DialogForm from "./DialogForm";
export default {
  components: {
    ColumnDisplay,
    Actions,
    ItemDiaplsy,
    BatchActions,
    DialogForm,
  },
  props: {
    attrs: Object,
  },
  data() {
    return {
      loading: false,
      sort: {},
      tableData: [],
      pageData: {
        pageSize: this.attrs.perPage,
        total: 0,
        currentPage: 1,
        lastPage: 1,
      },
      page: 1,
      quickSearch: null,
      selectionRows: [],
      filterFormData: null,
      tabsSelectdata: {},
      tabsActiveName: "all",
    };
  },

  mounted() {
    //初始化默认设置值
    this.filterFormData = this._.cloneDeep(this.attrs.filter.filterFormData);
    this.sort = this._.cloneDeep(this.attrs.defaultSort);

    //初始化vuex状态值
    if (this.$store.getters.thisPage.grids.page) {
      this.page = this._.cloneDeep(this.$store.getters.thisPage.grids.page);

      if (this.attrs.attributes.dataVuex) {
        this.tableData = this._.cloneDeep(
          this.$store.getters.thisPage.grids.tableData
        );
      }

      this.pageData = this._.cloneDeep(
        this.$store.getters.thisPage.grids.pageData
      );

      this.quickSearch = this._.cloneDeep(
        this.$store.getters.thisPage.grids.quickSearch
      );

      this.filterFormData = this._.cloneDeep(
        this.$store.getters.thisPage.grids.filterFormData
      );

      this.sort = this._.cloneDeep(this.$store.getters.thisPage.grids.sort);
    }

    //加载数据
    if (this.tableData.length <= 0 || !this.attrs.attributes.dataVuex) {
      this.getData();
    }

    //监听事件
    this.$bus.on("tableReload", () => {
      this.getData();
    });
    this.$bus.on("tableSetLoading", (status) => {
      this.loading = status;
    });

    this.$bus.on("showDialogGridFrom", ({ isShow, key }) => {
      this.$refs["DialogGridFrom"].dialogVisible = isShow;
      this.$refs["DialogGridFrom"].key = key;
    });
  },
  destroyed() {
    //取消监听
    try {
      this.$bus.off("tableReload");
      this.$bus.off("tableSetLoading");
      this.$bus.off("showDialogGridFrom");
    } catch (e) {}
  },
  methods: {
    onTabClick(e) {
      const name = this._.split(e.name, "----");
      this.tabsSelectdata[name[0]] = name[1];

      this.getData();
    },
    //表单过滤提交
    onFilterSubmit() {
      this.getData();
    },
    //表单还原
    onFilterReset() {
      this.filterFormData = this._.cloneDeep(this.attrs.filter.filterFormData);
      this.getData();
    },
    //获取数据
    getData() {
      this.loading = true;
      this.$http
        .get(this.attrs.dataUrl, {
          params: {
            get_data: true,
            page: this.page,
            per_page: this.pageData.pageSize,
            ...this.sort,
            ...this.q_search,
            ...this.filterFormData,
            ...this.tabsSelectdata,
          },
        })
        .then(
          ({ data: { data, current_page, per_page, total, last_page } }) => {
            this.tableData = data;

            this.pageData.pageSize = per_page;
            this.pageData.currentPage = current_page;
            this.pageData.total = total;
            this.pageData.lastPage = last_page;

            //**保存 Grid状态 */
            if (this.attrs.attributes.dataVuex) {
              this.$store.commit("setGridData", {
                key: "tableData",
                data: this.tableData,
              });
            }

            this.$store.commit("setGridData", { key: "sort", data: this.sort });
            this.$store.commit("setGridData", { key: "page", data: this.page });
            this.$store.commit("setGridData", {
              key: "pageData",
              data: this.pageData,
            });

            this.$store.commit("setGridData", {
              key: "quickSearch",
              data: this.quickSearch,
            });
            this.$store.commit("setGridData", {
              key: "filterFormData",
              data: this.filterFormData,
            });
            /** */
          }
        )
        .finally(() => {
          this.loading = false;
        });
    },
    //当表格的排序条件发生变化的时候会触发该事件
    onTableSortChange({ column, prop, order }) {
      if (order) {
        this.sort.sort_field = column.columnKey; //后端排序字段
        this.sort.sort_prop = column.property; //表格排序字段
        this.sort.sort_order = order == "ascending" ? "asc" : "desc";
      } else {
        this.sort = {};
      }
      this.getData();
    },
    //当选择项发生变化时会触发该事件
    onTableselectionChange(selection) {
      this.selectionRows = selection;
      this.$store.commit("setGridData", {
        key: "selectionKeys",
        data: this.keys,
      });
    },
    //每页大小改变时
    onPageSizeChange(per_page) {
      this.page = 1;
      this.pageData.pageSize = per_page;
      this.getData();
    },
    //页码改变时
    onPageCurrentChange(page) {
      this.page = page;
      this.getData();
    },
    tableRowClassName({row, rowIndex}) {
        if (row.code ==-1 || row.score < 50) {
            return 'error-row';
        } else if (row.score >= 50 && row.score < 80) {
            return 'warning-row';
        }
        return '';
    }
  },
  computed: {
    keys() {
      return this.selectionRows
        .map((item) => {
            console.log(item,this.attrs.keyName);
          return item[this.attrs.keyName];
        })
        .join(",");
    },
    //当前路径
    path() {
      return this.$route.path;
    },
    //
    columns() {
      return this.column_attributes.map((attributes) => {
        return attributes;
      });
    },
    //默认排序
    default_sort_get() {
      return this.sort
        ? {
            prop: this.sort.sort_prop,
            order: this.sort.sort_order == "asc" ? "ascending" : "descending",
          }
        : {};
    },
    //搜索处理
    q_search() {
      const q_search = new Object();
      this.attrs.quickSearch &&
        (q_search[this.attrs.quickSearch.searchKey] = this.quickSearch);
      return q_search;
    },
  },
};
</script>

<style lang="scss">
.grid-container {
  .table-page {
    padding: 8px 0;
  }
  .grid-top-container {
    padding: 8px;
    display: flex;
    justify-content: space-between;
    .grid-top-container-left {
      display: flex;
      align-items: center;
    }
    .grid-top-container-right {
      display: flex;
      align-items: center;
      .icon-actions {
        display: flex;
        align-items: center;
        margin-left: 5px;
        i {
          font-size: 20px;
          margin-right: 10px;
        }
      }
    }
  }
  .el-tabs__header {
    padding: 0;
    margin: 0;
  }
  .el-tabs__item {
    padding: 0 15px;
    height: 50px;
    line-height: 50px;
  }
  .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
    padding-left: 15px;
  }
  .el-tabs__nav-wrap::after {
    height: 1px;
    background-color: #ebeef5;
  }
  .filter-form {
    padding: 10px;
    border-bottom: 1px solid #ebeef5;
    .el-form-item {
      margin-bottom: 0px;
      .el-form-item__label {
        padding: 0;
      }
    }
  }
  .warning-row {
    background: #e6a23c;
  }
  .error-row {
    background: #f56c6c;
  }
}
</style>
