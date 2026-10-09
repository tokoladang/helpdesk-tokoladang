import DefaultTheme from 'vitepress/theme'
import AnswerAccordion from '../components/AnswerAccordion.vue'
import BlogList from '../components/BlogList.vue'
import GuideList from '../components/GuideList.vue'
import PageDate from '../components/PageDate.vue'
import TagBadge from '../components/TagBadge.vue'
import './style.css'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('AnswerAccordion', AnswerAccordion)
        app.component('BlogList', BlogList)
        app.component('GuideList', GuideList)
        app.component('PageDate', PageDate)
        app.component('TagBadge', TagBadge)
    },
}
