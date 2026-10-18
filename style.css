
:root {
    --red: #c83b2b;
    --red-dark: #a92c20;
    --cream: #fffaf2;
    --cream-dark: #f5eadb;
    --white: #ffffff;
    --text: #292522;
    --muted: #71675e;
    --border: #e8dbca;
    --green: #496b3c;
    --shadow: 0 10px 30px rgba(55, 35, 20, 0.09);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 85px;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: var(--cream);
    color: var(--text);
    line-height: 1.6;
}

body.modal-open {
    overflow: hidden;
}

img {
    display: block;
    max-width: 100%;
}

button, input, textarea, select {
    font: inherit;
}

button, a {
    -webkit-tap-highlight-color: transparent;
}

a {
    color: inherit;
    text-decoration: none;
}

button {
    cursor: pointer;
}

.header {
    min-height: 76px;
    padding: 14px 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    background: var(--white);
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo {
    color: var(--text);
    font-size: 1.5rem;
    font-weight: 900;
    letter-spacing: -1px;
    white-space: nowrap;
}

.logo span {
    color: var(--red);
}

.nav {
    display: flex;
    align-items: center;
    gap: 26px;
}

.nav a {
    font-size: .94rem;
    font-weight: 700;
    transition: color .2s;
}

.nav a:hover {
    color: var(--red);
}

.nav .nav-order {
    background: var(--red);
    color: white;
    padding: 10px 17px;
    border-radius: 7px;
}

.nav .nav-order:hover {
    background: var(--red-dark);
    color: white;
}

.menu-toggle {
    display: none;
    border: 0;
    background: transparent;
    color: var(--text);
    font-size: 1.7rem;
}

.hero {
    padding: 65px 8%;
    min-height: 490px;
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    align-items: center;
    gap: 55px;
    background: var(--cream-dark);
}

.hero-content {
    max-width: 590px;
}

.eyebrow {
    color: var(--red);
    font-weight: 800;
    font-size: .77rem;
    letter-spacing: 1.5px;
    margin-bottom: 10px;
}

.hero h1 {
    font-size: clamp(3rem, 6vw, 5rem);
    line-height: 1.04;
    letter-spacing: -2px;
    margin-bottom: 22px;
}

.hero h1 span,
.section-heading h2 span,
.product-content h2 span,
.order-intro h2 span {
    color: var(--red);
}

.hero-description {
    color: var(--muted);
    max-width: 490px;
    font-size: 1.05rem;
}

.hero-buttons,
.product-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 27px;
}

.btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-height: 45px;
    padding: 12px 20px;
    border-radius: 7px;
    border: 2px solid transparent;
    font-size: .93rem;
    font-weight: 800;
    text-align: center;
    transition: background .2s, transform .2s;
}

.btn:hover {
    transform: translateY(-2px);
}

.btn-red {
    background: var(--red);
    color: white;
}

.btn-red:hover {
    background: var(--red-dark);
}

.btn-light {
    background: white;
    color: var(--text);
    border-color: var(--border);
}

.btn-light:hover {
    background: var(--cream);
}

.hero-image,
.about-image {
    position: relative;
    min-width: 0;
    min-height: 310px;
    display: grid;
    place-items: center;
    overflow: hidden;
    background: #ead8c3;
    border-radius: 15px;
}

.hero-image > img,
.about-image > img {
    position: absolute;
    inset: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.image-placeholder {
    text-align: center;
    color: #806b58;
    padding: 35px;
}

.image-placeholder span {
    font-size: 4rem;
}

.image-placeholder p {
    font-weight: 800;
}

.image-placeholder small {
    font-size: .8rem;
}

.photo-caption {
    position: absolute;
    z-index: 3;
    bottom: 14px;
    left: 14px;
    background: white;
    padding: 9px 13px;
    border-radius: 7px;
    font-size: .85rem;
    font-weight: 800;
}

.benefits {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 23px 8%;
    background: var(--red);
    color: white;
}

.benefit {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
}

.benefit > span {
    font-size: 1.35rem;
    font-weight: 900;
    color: #ffd5a7;
}

.benefit strong {
    display: block;
    font-size: .95rem;
}

.benefit p {
    color: #ffe5dc;
    font-size: .8rem;
}

.section {
    padding: 75px 8%;
}

.section-heading {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 35px;
}

.section-heading h2,
.product-content h2,
.order-intro h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.15;
    margin-bottom: 15px;
}

.section-heading > p:last-child {
    color: var(--muted);
}

.about-section {
    background: white;
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
}

.about-image {
    min-height: 340px;
}

.about-copy h3 {
    font-size: 1.65rem;
    margin-bottom: 15px;
}

.about-copy p,
.product-content > p:not(.eyebrow) {
    color: var(--muted);
    margin-bottom: 15px;
}

.text-link {
    display: inline-block;
    margin-top: 8px;
    color: var(--red);
    font-weight: 800;
}

.product-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 55px;
    background: var(--cream-dark);
}

.product-content > p:not(.eyebrow) {
    margin-bottom: 20px;
}

.product-facts {
    display: grid;
    gap: 15px;
}

.fact {
    display: flex;
    gap: 15px;
    align-items: flex-start;
    padding: 19px;
    background: white;
    border: 1px solid var(--border);
    border-radius: 10px;
}

.fact-icon {
    font-size: 1.8rem;
}

.fact h3 {
    margin-bottom: 4px;
}

.fact p {
    color: var(--muted);
    font-size: .92rem;
}

.process-preview {
    text-align: center;
    background: white;
}

.process-preview .section-heading {
    margin-bottom: 24px;
}

/* PRODUCT TESTING */

.testing-section {
    background: var(--cream);
}

.testing-content {
    display: grid;
    gap: 20px;
    max-width: 920px;
    margin: auto;
}

.testing-panel {
    display: grid;
    grid-template-columns: 58px minmax(0, 1fr);
    gap: 18px;
    align-items: start;
    padding: 25px;
    background: white;
    border: 1px solid var(--border);
    border-radius: 12px;
    box-shadow: 0 5px 18px rgba(55, 35, 20, .04);
}

.testing-icon {
    width: 52px;
    height: 52px;
    display: grid;
    place-items: center;
    background: #fff0e7;
    border-radius: 10px;
    font-size: 1.6rem;
}

.testing-label {
    color: var(--red);
    font-size: .72rem;
    font-weight: 900;
    letter-spacing: 1.2px;
    margin-bottom: 5px;
}

.testing-panel h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
}

.testing-panel p {
    color: var(--muted);
    margin-bottom: 10px;
}

.testing-panel p:last-child {
    margin-bottom: 0;
}

.result-placeholder {
    margin-top: 15px;
    padding: 15px;
    border-left: 4px solid var(--red);
    background: var(--cream);
    border-radius: 0 7px 7px 0;
}

.result-placeholder strong {
    display: block;
    margin-bottom: 5px;
    font-size: .92rem;
}

.result-placeholder p {
    font-size: .9rem;
}

.feedback-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
    margin-top: 18px;
}

.feedback-item {
    padding: 15px;
    background: var(--cream);
    border: 1px solid var(--border);
    border-radius: 8px;
}

.feedback-item > span {
    color: var(--red);
    font-size: .75rem;
    font-weight: 900;
}

.feedback-item h4 {
    margin: 5px 0;
}

.feedback-item p {
    font-size: .88rem;
}

.testing-footnote {
    max-width: 920px;
    margin: 20px auto 0;
    color: var(--muted);
    font-size: .83rem;
    text-align: center;
}

/* ORDER FORM */

.order-section {
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    gap: 50px;
    align-items: start;
    background: var(--cream-dark);
}

.order-intro > p:not(.eyebrow) {
    color: var(--muted);
}

.order-note {
    display: flex;
    gap: 12px;
    margin-top: 25px;
    padding: 15px;
    background: white;
    border: 1px solid var(--border);
    border-radius: 8px;
}

.order-note span {
    font-size: 1.4rem;
}

.order-note p {
    font-size: .92rem;
}

.order-form {
    padding: 28px;
    background: white;
    border: 1px solid var(--border);
    border-radius: 12px;
    box-shadow: var(--shadow);
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 7px;
    min-width: 0;
    margin-bottom: 18px;
}

.form-group label {
    font-size: .9rem;
    font-weight: 800;
}

.form-group input,
.form-group textarea,
.form-group select {
    width: 100%;
    min-width: 0;
    padding: 12px;
    border: 1px solid #d8ccbd;
    border-radius: 7px;
    background: #fffdfa;
    color: var(--text);
    outline: none;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
    border-color: var(--red);
    box-shadow: 0 0 0 3px rgba(200, 59, 43, .1);
}

.form-group textarea {
    resize: vertical;
}

/* This ensures the address field disappears completely on pickup. */
[hidden] {
    display: none !important;
}

.submit-btn {
    width: 100%;
    border: none;
}

.form-feedback {
    color: var(--green);
    font-size: .9rem;
    margin-top: 12px;
    overflow-wrap: anywhere;
}

/* FOOTER */

.footer {
    padding: 30px 8%;
    text-align: center;
    background: white;
    border-top: 1px solid var(--border);
}

.footer > p {
    color: var(--muted);
    font-size: .9rem;
}

.footer .copyright {
    margin-top: 12px;
    font-size: .8rem;
}

/* PROCESS GRAPH MODAL */

.process-modal,
.summary-modal {
    position: fixed;
    inset: 0;
    z-index: 500;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: rgba(35, 27, 22, .72);
    overflow-y: auto;
}

.process-modal.is-open,
.summary-modal.is-open {
    display: flex;
}

.process-modal-panel {
    width: min(1050px, 100%);
    max-height: calc(100dvh - 40px);
    overflow: auto;
    margin: auto;
    padding: 25px;
    background: var(--cream);
    border-radius: 14px;
    box-shadow: 0 20px 65px rgba(0, 0, 0, .25);
}

.process-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 15px;
}

.process-modal-header h2,
.summary-panel h2 {
    font-size: clamp(1.5rem, 3vw, 2.2rem);
    line-height: 1.2;
}

.process-instructions {
    color: var(--muted);
    margin-top: 9px;
    font-size: .93rem;
}

.modal-close {
    flex: 0 0 auto;
    width: 42px;
    height: 42px;
    border: none;
    border-radius: 50%;
    background: #f0e4d7;
    color: var(--text);
    font-size: 1.8rem;
    line-height: 1;
}

.modal-close:hover {
    background: #e7d4c0;
}

.process-graph {
    position: relative;
    width: 100%;
    max-width: 960px;
    height: 600px;
    margin: 18px auto 0;
    overflow: hidden;
    background: #fffdf9;
    border: 1px solid var(--border);
    border-radius: 12px;
    isolation: isolate;
}

.process-lines {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.branch-line {
    fill: none;
    stroke: var(--red);
    stroke-width: 4;
    stroke-linecap: round;
    stroke-dasharray: 900;
    stroke-dashoffset: 900;
}

.process-modal.is-open .branch-line {
    animation: branchGrow 1s ease-out forwards;
}

.process-modal.is-open .branch-line:nth-child(2) {
    animation-delay: .2s;
}

.process-modal.is-open .branch-line:nth-child(3) {
    animation-delay: .4s;
}

.process-modal.is-open .branch-line:nth-child(4) {
    animation-delay: .6s;
}

@keyframes branchGrow {
    from {
        stroke-dashoffset: 900;
        opacity: .2;
    }
    to {
        stroke-dashoffset: 0;
        opacity: .9;
    }
}

.process-step {
    position: absolute;
    z-index: 2;
    width: 190px;
    min-height: 205px;
    padding: 13px;
    border: 1px solid var(--border);
    border-radius: 11px;
    background: white;
    text-align: center;
    box-shadow: 0 5px 18px rgba(55, 35, 20, .09);
    opacity: 0;
}

.process-modal.is-open .process-step {
    animation: stepAppear .5s ease-out forwards;
}

.step-one {
    left: 7%;
    top: 3%;
    animation-delay: .15s;
}

.step-two {
    right: 7%;
    top: 3%;
    animation-delay: .35s;
}

.step-three {
    left: 7%;
    bottom: 3%;
    animation-delay: .55s;
}

.step-four {
    right: 7%;
    bottom: 3%;
    animation-delay: .75s;
}

@keyframes stepAppear {
    from {
        opacity: 0;
        transform: scale(.8);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.step-picture {
    position: relative;
    width: 100%;
    height: 100px;
    display: grid;
    place-items: center;
    overflow: hidden;
    margin-bottom: 8px;
    border-radius: 7px;
    background: var(--cream-dark);
}

.step-picture img {
    position: absolute;
    inset: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.step-fallback {
    font-size: 2.5rem;
}

.step-number {
    color: var(--red);
    font-size: .7rem;
    font-weight: 900;
    letter-spacing: 1px;
}

.process-step h3 {
    font-size: 1rem;
    margin: 2px 0;
}

.process-step p {
    color: var(--muted);
    font-size: .78rem;
    line-height: 1.4;
}

.process-center {
    position: absolute;
    z-index: 4;
    left: 50%;
    top: 50%;
    width: 180px;
    height: 180px;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px;
    background: white;
    border: 3px solid var(--red);
    border-radius: 50%;
    text-align: center;
    box-shadow: 0 0 0 8px rgba(200, 59, 43, .1);
}

.process-modal.is-open .process-center {
    animation: centerPop .5s ease-out both;
}

@keyframes centerPop {
    from {
        opacity: 0;
        scale: .65;
    }
    to {
        opacity: 1;
        scale: 1;
    }
}

.center-picture {
    position: relative;
    width: 92px;
    height: 92px;
    display: grid;
    place-items: center;
    overflow: hidden;
    margin-bottom: 4px;
    border-radius: 50%;
    background: var(--cream-dark);
}

.center-picture img {
    position: absolute;
    inset: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.center-fallback {
    font-size: 2.5rem;
}

.process-center strong {
    font-size: .8rem;
    letter-spacing: .5px;
}

.process-center small {
    color: var(--muted);
    font-size: .7rem;
}

.process-disclaimer {
    margin-top: 12px;
    color: var(--muted);
    font-size: .8rem;
    text-align: center;
}

/* ORDER SUMMARY MODAL */

.summary-panel {
    position: relative;
    width: min(550px, 100%);
    margin: auto;
    padding: 30px;
    border-radius: 13px;
    background: var(--cream);
    box-shadow: var(--shadow);
}

.summary-close {
    position: absolute;
    top: 15px;
    right: 15px;
}

.summary-panel h2 {
    padding-right: 35px;
}

.summary-warning {
    margin-top: 12px;
    color: var(--muted);
    font-size: .9rem;
}

#orderSummary {
    margin-top: 18px;
    padding: 16px;
    max-height: 300px;
    overflow-y: auto;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    font-family: Arial, Helvetica, sans-serif;
    font-size: .9rem;
    background: white;
    border: 1px solid var(--border);
    border-radius: 8px;
}

.summary-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 15px;
}

/* TOAST */

.toast {
    position: fixed;
    left: 50%;
    bottom: 25px;
    z-index: 1000;
    max-width: calc(100% - 30px);
    padding: 12px 20px;
    border-radius: 8px;
    background: var(--text);
    color: white;
    text-align: center;
    opacity: 0;
    pointer-events: none;
    transform: translate(-50%, 20px);
    transition: opacity .2s, transform .2s;
}

.toast.show {
    opacity: 1;
    transform: translate(-50%, 0);
}

/* RESPONSIVE DESIGN */

@media (max-width: 850px) {
    .header {
        padding: 13px 5%;
    }

    .menu-toggle {
        display: block;
    }

    .nav {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        padding: 20px 5%;
        background: white;
        border-bottom: 1px solid var(--border);
        flex-direction: column;
        align-items: stretch;
        gap: 17px;
    }

    .nav.open {
        display: flex;
    }

    .nav .nav-order {
        text-align: center;
    }

    .hero {
        grid-template-columns: 1fr;
        padding: 50px 6%;
        gap: 30px;
    }

    .hero-image {
        min-height: 280px;
    }

    .benefits {
        padding: 22px 5%;
    }

    .benefit {
        justify-content: flex-start;
    }

    .section {
        padding: 55px 6%;
    }

    .about-grid,
    .product-section,
    .order-section {
        grid-template-columns: 1fr;
        gap: 30px;
    }

    .process-graph {
        height: 570px;
    }

    .process-step {
        width: 165px;
        min-height: 190px;
    }

    .step-picture {
        height: 85px;
    }

    .process-center {
        width: 150px;
        height: 150px;
    }

    .center-picture {
        width: 75px;
        height: 75px;
    }
}

@media (max-width: 540px) {
    .benefits {
        grid-template-columns: 1fr;
        gap: 15px;
    }

    .form-row {
        grid-template-columns: 1fr;
        gap: 0;
    }

    .order-form {
        padding: 20px;
    }

    .process-modal {
        padding: 8px;
    }

    .process-modal-panel {
        max-height: calc(100dvh - 16px);
        padding: 14px;
    }

    .process-modal-header h2 {
        font-size: 1.35rem;
    }

    .process-graph {
        height: 760px;
    }

    .process-step {
        width: 43%;
        min-height: 175px;
        padding: 8px;
    }

    .step-one,
    .step-two {
        top: 2%;
    }

    .step-three,
    .step-four {
        bottom: 2%;
    }

    .step-one,
    .step-three {
        left: 2%;
    }

    .step-two,
    .step-four {
        right: 2%;
    }

    .step-picture {
        height: 75px;
    }

    .process-step h3 {
        font-size: .88rem;
    }

    .process-step p {
        font-size: .7rem;
    }

    .process-center {
        width: 125px;
        height: 125px;
        padding: 8px;
    }

    .center-picture {
        width: 62px;
        height: 62px;
    }

    .process-center strong {
        font-size: .7rem;
    }

    .process-center small {
        font-size: .65rem;
    }

    .testing-panel {
        grid-template-columns: 1fr;
        padding: 20px;
    }

    .feedback-grid {
        grid-template-columns: 1fr;
    }

    .summary-panel {
        padding: 22px;
    }
}

@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        scroll-behavior: auto !important;
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: .01ms !important;
    }
}


/* BOOMSTICK REVISION: simpler, bolder layout */
:root {
    --red: #b83224;
    --red-dark: #922719;
    --cream: #fffdf8;
    --cream-dark: #f3e7d8;
    --text: #27211e;
    --muted: #655b54;
    --border: #dfd2c4;
    --shadow: 0 8px 22px rgba(39, 24, 16, .08);
}

body { background: var(--cream); }
.header { min-height: 70px; box-shadow: 0 2px 8px rgba(30, 20, 15, .04); }
.logo { letter-spacing: -.6px; }
.hero { background: #f1e2d1; }
.hero h1 { letter-spacing: -1.5px; }
.hero-image, .about-image { border-radius: 5px; background: #e6d1ba; }
.photo-caption { border-radius: 3px; }
.btn { border-radius: 4px; }
.benefits { background: #30231f; }
.benefit > span { color: #f0b58e; }
.section-heading h2, .product-content h2, .order-intro h2 { letter-spacing: -.7px; }
.fact, .testing-panel, .order-form { border-radius: 5px; box-shadow: none; }
.fact { border-left: 3px solid var(--red); }
.testing-panel { border-radius: 5px; }
.feedback-item, .result-placeholder, .order-note { border-radius: 4px; }
.order-form { box-shadow: 0 6px 18px rgba(39, 24, 16, .06); }
.form-group input, .form-group textarea, .form-group select { border-radius: 4px; }

/* Process graph: the four process photos branch out from the product in the middle. */
.process-graph {
    height: 650px;
    max-width: 1000px;
    background: #f7efe5;
    border: 1px solid #e4d3c1;
    border-radius: 5px;
}
.process-lines { z-index: 1; }
.branch-line {
    stroke: #b83224;
    stroke-width: 5;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
}
.process-step {
    width: 210px;
    min-height: 0;
    padding: 10px;
    border: 2px solid #e5d3c1;
    border-radius: 5px;
    box-shadow: 0 4px 12px rgba(50, 30, 20, .07);
}
.step-one { left: 7%; top: 5%; }
.step-two { right: 7%; top: 5%; }
.step-three { left: 7%; bottom: 5%; }
.step-four { right: 7%; bottom: 5%; }
.step-picture {
    height: 112px;
    border-radius: 3px;
    background: #ead9c7;
}
.step-fallback, .center-fallback { color: #9c4934; }
.process-center {
    width: 190px;
    height: 190px;
    padding: 12px;
    border: 4px solid #b83224;
    background: #fffdf8;
    box-shadow: 0 0 0 9px rgba(184, 50, 36, .09);
}
.center-picture { width: 105px; height: 105px; }
.process-center strong { font-size: .85rem; }
.process-center small { font-size: .72rem; }
.process-instructions { max-width: 720px; }
.testing-footnote { font-weight: 700; }
.image-placeholder { position: relative; z-index: 1; }
.hero-image > img:not(.image-missing), .about-image > img:not(.image-missing) { z-index: 2; }
img.image-missing { display: none !important; }

@media (max-width: 850px) {
    .process-graph { height: 600px; }
    .process-step { width: 180px; }
    .step-picture { height: 95px; }
    .process-center { width: 155px; height: 155px; }
    .center-picture { width: 78px; height: 78px; }
}
@media (max-width: 540px) {
    .process-graph { height: 690px; }
    .process-step { width: 43%; padding: 8px; }
    .step-picture { height: 80px; }
    .process-center { width: 122px; height: 122px; }
    .center-picture { width: 58px; height: 58px; }
    .process-center strong { font-size: .65rem; }
    .process-center small { font-size: .6rem; }
    .branch-line { stroke-width: 3; }
}


/* ========================================
   ORDER CONFIRMATION POPUP
======================================== */

.confirmation-modal {
    position: fixed;
    inset: 0;
    z-index: 600;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: rgba(35, 27, 22, 0.75);
    overflow-y: auto;
}

.confirmation-modal.is-open {
    display: flex;
    animation: confirmationFadeIn 0.2s ease-out;
}

.confirmation-panel {
    width: min(440px, 100%);
    margin: auto;
    padding: 35px 28px;
    background: var(--cream);
    border: 1px solid var(--border);
    border-top: 5px solid var(--green);
    border-radius: 8px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
    text-align: center;
    animation: confirmationSlideUp 0.3s ease-out;
}

.confirmation-icon {
    width: 76px;
    height: 76px;
    display: grid;
    place-items: center;
    margin: 0 auto 20px;
    border-radius: 50%;
    background: #e6f0df;
    border: 2px solid #c6dbb9;
    color: var(--green);
    font-size: 2.6rem;
    font-weight: 900;
}

.confirmation-panel .eyebrow {
    margin-bottom: 8px;
    font-size: 0.7rem;
}

.confirmation-panel h2 {
    margin-bottom: 14px;
    font-size: clamp(1.7rem, 5vw, 2.2rem);
    line-height: 1.2;
    color: var(--text);
}

.confirmation-panel > p:not(.eyebrow) {
    margin-bottom: 16px;
    color: var(--muted);
    font-size: 0.95rem;
}

.confirmation-panel .confirmation-note {
    padding: 11px;
    background: var(--cream-dark);
    border-radius: 4px;
    font-size: 0.78rem !important;
}

#finishOrder {
    width: 100%;
    margin-top: 5px;
    border: none;
}

#confirmOrder {
    flex: 1 1 180px;
    border: none;
}

#editOrder {
    flex: 1 1 120px;
}

.summary-actions {
    align-items: stretch;
}

.summary-actions .btn {
    min-width: 0;
}

/* POPUP ANIMATIONS */

@keyframes confirmationFadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes confirmationSlideUp {
    from {
        opacity: 0;
        transform: translateY(15px) scale(0.97);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

/* KEYBOARD FOCUS */

button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
    outline: 3px solid var(--red);
    outline-offset: 3px;
}

/* MOBILE CONFIRMATION POPUP */

@media (max-width: 540px) {
    .confirmation-modal {
        padding: 14px;
    }

    .confirmation-panel {
        padding: 28px 20px;
    }

    .confirmation-icon {
        width: 66px;
        height: 66px;
        font-size: 2.2rem;
    }

    .summary-actions {
        flex-direction: column;
    }

    .summary-actions .btn {
        width: 100%;
    }
}

/* REDUCE ANIMATION FOR ACCESSIBILITY */

@media (prefers-reduced-motion: reduce) {
    .confirmation-modal.is-open,
    .confirmation-panel {
        animation: none;
    }
}
