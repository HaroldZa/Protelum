const app = Vue.createApp({
    data() {
        return {
            lorem: 'Lorem ipsum dolor sit amet...',
            drawerPos: 120,
        };
    },
    computed: {
        drawerStyle() {
            console.log(this.drawerPos)
            return {
                height: `${this.$q.screen.height}px`,
                transform: `translateY(${-this.drawerPos}px)`
            };
        },
       
    },
    methods: {
        slideDrawer(ev) {
            const { height } = this.$q.screen;
            this.drawerPos = Math.max(40, Math.min(height, this.drawerPos - ev.delta.y));

            if (ev.isFinal === true) {
                if (this.drawerPos / height > 0.85) {
                    this.animateDrawerTo(height);
                } else if (this.drawerPos / height > 0.50) {
                    this.animateDrawerTo(500);
                }
                else if (this.drawerPos / height > 0.20) {
                    this.animateDrawerTo(230);
                }
                 else {
                    this.animateDrawerTo(120);
                }
            }
        },
        animateDrawerTo(height) {
            const diff = height - this.drawerPos;

            if (diff !== 0) {
                this.drawerPos += Math.abs(diff) < 2 ? diff : Math.round(diff / 2);
                setTimeout(() => {
                    this.animateDrawerTo(height);
                }, 30);
            }
        }
    },

});

app.use(Quasar, {}).mount('#q-app');

const appElement = document.getElementById("q-app");

appElement.addEventListener("touchmove", function(event) {
    event.preventDefault();
}, { passive: false });
