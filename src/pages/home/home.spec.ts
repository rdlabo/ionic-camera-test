import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HomePage as testComponent } from './home';
import { IonicModule, Platform, NavController} from 'ionic-angular/index';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { PlatformMock, StatusBarMock, SplashScreenMock, CameraMock } from '../../../test-config/mocks-ionic';

describe('Page1', () => {
    let de: DebugElement;
    let comp: testComponent;
    let fixture: ComponentFixture<testComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [testComponent],
            imports: [
                IonicModule.forRoot(testComponent)
            ],
            providers: [
                NavController,
                { provide: Platform, useClass: PlatformMock},
                { provide: StatusBar, useClass: StatusBarMock },
                { provide: SplashScreen, useClass: SplashScreenMock },
                { provide: Camera, useClass: CameraMock}
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(testComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('p'));
    });

    it('should create component', () => expect(comp).toBeDefined());

    it('should have expected <h3> text', () => {
        fixture.detectChanges();
        const p = de.nativeElement;
        expect(p.innerText).toMatch(/If you get lost, the docs will be your guide./i,
            '<p> should say something about p tag line');
    });

    it('should create camera', () => {
        comp._getNativeCamera().then(
            data => {
                expect(data).toMatch(/data:image\/jpeg;base64,/i,
                    '<p> should check camera');
            }
        );
    });

});