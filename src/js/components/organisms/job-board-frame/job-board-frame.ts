/** @format */
import { Vue, Component } from 'vue-property-decorator';
import WithRender from './job-board-frame.vue.html';

@WithRender
@Component({
    name: 'JobBoardFrame',
})
export class JobBoardFrame extends Vue {
    private url: string = 'https://boards.greenhouse.io/embed/job_board/js?for=ultimaker';

    private beforeMount(): void {
        const script: HTMLScriptElement = document.createElement('script');
        script.src = this.url;
        script.onload = (): void => {
            // @ts-ignore
            if (window.Grnhse) {
                // @ts-ignore
                window.Grnhse.Iframe.load();
            }
        };

        document.body.appendChild(script);
    }
}
