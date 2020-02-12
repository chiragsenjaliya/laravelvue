<template >

  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>
            <slot></slot>
          </h1>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->
  </section>
  <section class="content">
    <!-- Default box -->
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Contacts Data</h3>

        <div class="card-tools">
          <a class="btn btn-primary" href="#">
                    <i class="far fa fa-plus"></i>
                    Create Contacts
                </a>
        </div>
      </div>
      <div class="card-body table-responsive">
        <vue-good-table mode="remote"
                        @on-page-change="onPageChange"
                        @on-sort-change="onSortChange"
                        @on-column-filter="onColumnFilter"
                        @on-per-page-change="onPerPageChange"
                        :totalRows="totalRecords"
                        :isLoading.sync="isLoading"
                        :pagination-options="{
                                    enabled: true,
                                }"
                        :rows="rows"
                        :columns="columns" />
      </div>
      <!-- /.card-footer-->
    </div>
    <!-- /.card -->
  </section>

</template>

<script>

  export default {
    data() {
      return {
        isLoading: false,
        columns: [
          //...
        ],
        rows: [],
        totalRecords: 0,
        serverParams: {
          columnFilters: {},
          sort: {
            field: '',
            type: ''
          },
          page: 1,
          perPage: 10
        }
      }
    },
    methods: {
      updateParams(newProps) {
        this.serverParams = Object.assign({}, this.serverParams, newProps)
      },

      onPageChange(params) {
        this.updateParams({ page: params.currentPage })
        this.loadItems()
      },

      onPerPageChange(params) {
        this.updateParams({ perPage: params.currentPerPage })
        this.loadItems()
      },

      onSortChange(params) {
        this.updateParams({
          sort: [
            {
              type: params.sortType,
              field: this.columns[params.columnIndex].field
            }
          ]
        })
        this.loadItems()
      },

      onColumnFilter(params) {
        this.updateParams(params)
        this.loadItems()
      },

      // load items is what brings back the rows from server
      loadItems() {
        getFromServer(this.serverParams).then(response => {
          this.totalRecords = response.totalRecords
          this.rows = response.rows
        })
      }
    }
  }

</script>
