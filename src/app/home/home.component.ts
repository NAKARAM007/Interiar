import { Component, ViewChild } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {
  SwiperComponent, SwiperDirective, SwiperConfigInterface, SwiperScrollbarInterface,
  SwiperPaginationInterface
} from 'ngx-swiper-wrapper';
import { IImage } from 'ng-simple-slideshow';

// import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';
// import { AuthenticationService, UserService } from '../_services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  public show: boolean = true;
  element: HTMLImageElement;
  public slides = [
    {
      imgsrc: 'assets/img/download1.jpg',
    },
    {
      imgsrc: 'assets/img/download2.jpg',
    },
    {
      imgsrc: 'assets/img/download3.jpg',
    },
    {
      imgsrc: 'assets/img/download4.jpg',
    },
    {
      imgsrc: 'assets/img/download5.jpg',
    },
    {
      imgsrc: 'assets/img/download6.jpg',
    },
    {
      imgsrc: 'assets/img/download7.jpg',
    },
    {
      imgsrc: 'assets/img/download8.jpg',
    },
    {
      imgsrc: 'assets/img/download9.jpg',
    }
  ];
  public type: string = 'component';

  public disabled: boolean = false;

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  private scrollbar: SwiperScrollbarInterface = {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  };

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };

  @ViewChild(SwiperComponent) componentRef: SwiperComponent;
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;

  // constructor() { }

  public toggleType() {
    this.type = (this.type === 'component') ? 'directive' : 'component';
  }

  public toggleDisabled() {
    this.disabled = !this.disabled;
  }

  public toggleDirection() {
    this.config.direction = (this.config.direction === 'horizontal') ? 'vertical' : 'horizontal';
  }

  public toggleSlidesPerView() {
    if (this.config.slidesPerView !== 1) {
      this.config.slidesPerView = 1;
    } else {
      this.config.slidesPerView = 2;
    }
  }

  public toggleOverlayControls() {
    if (this.config.navigation) {
      this.config.scrollbar = false;
      this.config.navigation = false;

      this.config.pagination = this.pagination;
    } else if (this.config.pagination) {
      this.config.navigation = false;
      this.config.pagination = false;

      this.config.scrollbar = this.scrollbar;
    } else {
      this.config.scrollbar = false;
      this.config.pagination = false;

      this.config.navigation = true;
    }

    if (this.type === 'directive') {
      this.directiveRef.setIndex(0);
    } else {
      this.componentRef.directiveRef.setIndex(0);
    }
  }

  public toggleKeyboardControl() {
    this.config.keyboard = !this.config.keyboard;
  }

  public toggleMouseWheelControl() {
    this.config.mousewheel = !this.config.mousewheel;
  }

  public onIndexChange(index: number) {
    // console.log('Swiper index: ', index);
  }

  // secont carousel---------------
 // images = [1, 2, 3, 4];//.map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

// tslint:disable-next-line: member-ordering
 images = ['assets/img/Kitchen/image-1.webp' , 
     'assets/img/Kitchen/image-2.webp',
     'assets/img/Kitchen/image-3.webp',
     'assets/img/Kitchen/image-4.webp' ];
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
}
