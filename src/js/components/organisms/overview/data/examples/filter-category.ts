import { callMeBack } from 'components/atoms/content-button/data/examples/call-me-back';
import { scheduleAnAppointment } from 'components/atoms/content-button/data/examples/schedule-an-appointment';
import { filterCategories } from 'components/molecules/list-section/data/examples/filter-categories';

export const filterCategory = {
    type: 'overview',
    title: 'Explore the benefits filtering',
    subtitle: 'to filter and beyond ...',
    ctas: {
        type: 'CtaBlock',
        ctas: [
            callMeBack,
            scheduleAnAppointment,
        ],
    },
    sections: [
        filterCategories,
    ],
};
