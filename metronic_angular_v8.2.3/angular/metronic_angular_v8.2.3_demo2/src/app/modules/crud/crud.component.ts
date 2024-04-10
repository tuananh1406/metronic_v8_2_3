import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { DataTableDirective } from 'angular-datatables';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() datatableConfig: DataTables.Settings = {};

  @Input() route: string = '/';

  @Input() reload: EventEmitter<boolean>;

  @Input() modal: TemplateRef<any>;

  @Output() deleteEvent = new EventEmitter<number>();
  @Output() editEvent = new EventEmitter<number>();
  @Output() createEvent = new EventEmitter<boolean>();

  dtOptions: DataTables.Settings = {};

  @ViewChild(DataTableDirective, { static: false })
  private datatableElement: DataTableDirective;

  @ViewChild('deleteSwal')
  public readonly deleteSwal!: SwalComponent;

  @ViewChild('successSwal')
  public readonly successSwal!: SwalComponent;

  private idInAction: number;

  constructor(private renderer: Renderer2, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.dtOptions = { ...this.datatableConfig };
    this.renderActionColumn();


    if (this.reload) {
      this.reload.subscribe(data => {
        this.modalService.dismissAll();
        this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => dtInstance.ajax.reload());
      });
    }
  }

  renderActionColumn(): void {
    const actionColumn = {
      render: (data: any, type: any, full: any) => `
          <button class="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-action="edit" data-id="${full.id}">
              <i class="ki-duotone ki-pencil fs-3"><span class="path1"></span><span class="path2"></span></i>                     
          </button>

          <button class="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-action="delete" data-id="${full.id}">
              <i class="ki-duotone ki-trash fs-3"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></i>                
          </button>
        `
    };
    if (this.dtOptions.columns) {
      this.dtOptions.columns.push(actionColumn);
    }
  }

  ngAfterViewInit(): void {
    this.renderer.listen(document, 'click', (event) => {
      const { action, id } = event.target.dataset;
      this.idInAction = id;

      switch (action) {
        case 'view': {
          this.router.navigate([`${this.route}/${id}`]);
          break;
        }
        case 'create': {
          this.modalService.open(this.modal);
          this.createEvent.emit(true);
          break;
        }
        case 'edit': {
          // this.router.navigate([`${this.route}/${id}/edit`]);
          this.editEvent.emit(this.idInAction);
          this.modalService.open(this.modal);
          break;
        }
        case 'delete': {
          this.deleteSwal.fire().then((clicked) => {
            if (clicked.isConfirmed) {
              this.successSwal.fire();
            }
          });
          break;
        }
      }
    });

    fromEvent<KeyboardEvent>(document, 'keyup')
      .pipe(
        debounceTime(50),
        map(event => {
          const target = event.target as HTMLElement;
          const action = target.getAttribute('data-action');
          const value = (target as HTMLInputElement).value.trim().toLowerCase();

          return { action, value };
        })
      )
      .subscribe(({ action, value }) => {
        if (action === 'filter') {
          this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => dtInstance.search(value).draw());
        }
      });
  }

  ngOnDestroy(): void {
    this.reload.unsubscribe();
  }

  triggerDelete() {
    this.deleteEvent.emit(this.idInAction);
  }
}
