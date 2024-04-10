import { Injectable } from '@angular/core';
import { ILayout } from './default-layout.config';
import { LayoutService } from './layout.service';

@Injectable({
  providedIn: 'root',
})
export class LayoutInitService {
  constructor(private layout: LayoutService) {}

  init() {
    this.layout.initConfig();

    // init base layout
    this.initLayout();
    this.initHeader();
    this.initPageTitle();
    this.initToolbar();
    this.initContent();
    this.initAside();
    this.initFooter();
  }

  update(fieldsToUpdate: Partial<ILayout>) {
    this.layout.updateConfig(fieldsToUpdate);
    this.initLayout();
    this.initHeader();
    this.initPageTitle();
    this.initToolbar();
    this.initContent();
    this.initAside();
    this.initFooter();
  }

  private initLayout() {
    document.body.setAttribute('style', '');
    document.body.setAttribute('id', 'kt_body');
    const selfBodyBackgroundImage = this.layout.getProp(
      'main.body.backgroundImage'
    );
    if (selfBodyBackgroundImage) {
      document.body.style.backgroundImage = `url("${selfBodyBackgroundImage}")`;
    }

    const selfBodyClass = (
      this.layout.getProp('main.body.class') || ''
    ).toString();
    if (selfBodyClass) {
      const bodyClasses: string[] = selfBodyClass.split(' ');
      bodyClasses.forEach((cssClass) => document.body.classList.add(cssClass));
    }
  }

  private initHeader() {
    this.layout.setCSSClass(
      'headerContainer',
      this.layout.getProp('header.width') === 'fluid'
        ? 'container-fluid'
        : 'container-xxl'
    );

    const fixedDesktop = this.layout.getProp('header.fixed.desktop') as boolean;
    if (fixedDesktop) {
      document.body.classList.add('header-fixed');
    }

    const tabletAndMobile = this.layout.getProp(
      'header.fixed.tabletAndMobile'
    ) as boolean;
    if (tabletAndMobile) {
      document.body.classList.add('header-tablet-and-mobile-fixed');
    }

    let dataKtStickyOffset = ``;
    if (fixedDesktop && tabletAndMobile) {
      dataKtStickyOffset = `{default: '200px', lg: '300px'}`;
    }

    if (fixedDesktop && !tabletAndMobile) {
      dataKtStickyOffset = `{lg: '300px'}`;
    }

    if (!fixedDesktop && tabletAndMobile) {
      dataKtStickyOffset = `{default: '200px', lg: false}`;
    }

    if (dataKtStickyOffset) {
      this.layout.setHTMLAttribute(
        'asideMenu',
        'data-kt-sticky-offset',
        dataKtStickyOffset
      );
    }
  }

  private initPageTitle() {}

  private initToolbar() {}

  private initContent() {
    const width = this.layout.getProp('content.width') as string;
    this.layout.setCSSClass(
      'contentContainer',
      width === 'fluid' ? 'container-fluid' : 'container-xxl'
    );
  }

  private initAside() {
    const display = this.layout.getProp('aside.display') as boolean;
    if (!display) {
      return;
    }

    // Fixed aside
    const asideFixed = this.layout.getProp('aside.fixed') as boolean;
    if (asideFixed) {
      document.body.classList.add('aside-fixed');
    }

    // Default minimized
    const asideMinimized = this.layout.getProp('aside.minimized') as boolean;
    if (asideMinimized) {
      document.body.setAttribute('data-kt-aside-minimize', 'on');
      this.layout.setCSSClass('asideToggle', `active`);
    }

    // Aside Secondary
    const asideSecondaryDisplay = this.layout.getProp(
      'aside.secondaryDisplay'
    ) as boolean;
    document.body.classList.add(
      `aside-secondary-${asideSecondaryDisplay ? 'enabled' : 'disabled'}`
    );
  }

  private initFooter() {
    const width = this.layout.getProp('footer.width') as string;
    this.layout.setCSSClass(
      'footerContainer',
      width === 'fluid' ? 'container-fluid' : 'container-xxl'
    );
  }
}
