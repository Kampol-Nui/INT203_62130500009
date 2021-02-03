    const app = {
        data() {
            return {
                myname: 'Kampol Thaipricha',
                mypic: 'images/2.jpg',
                member: 'Member since Jan 2021',
                rawHtml1: '<span class="font-weight-bold">Post</span>',
                rawHtml2: '<span class="font-weight-bold">Comments</span>',
                rawHtml3: '<span class="font-weight-bold">Favourites</span>',
                follow:'follow',
                num:[281,2,37,12]
            }
        }

    }
    var MountedApp = Vue.createApp(app).mount('#app')