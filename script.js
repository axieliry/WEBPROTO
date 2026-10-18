
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const menuToggle = $("#menuToggle");
const nav = $("#nav");
const processModal = $("#processModal");
const summaryModal = $("#summaryModal");
const orderForm = $("#orderForm");

const orderTypeSelect = $("#orderType");
const addressGroup = $("#addressGroup");
const addressInput = $("#address");

let currentOrderText = "";
let lastFocusedElement = null;

/* MOBILE NAVIGATION */

menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
});

$$(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

/* CURRENT YEAR */

$("#year").textContent = new Date().getFullYear();

/* DELIVERY AND PICKUP ADDRESS FIELD */

function updateAddressField() {
    const isDelivery = orderTypeSelect.value === "Delivery";

    // Hide the entire address field for pickup orders.
    addressGroup.hidden = !isDelivery;

    // Only require an address for delivery.
    addressInput.required = isDelivery;

    // Clear the old address when switching to pickup.
    if (!isDelivery) {
        addressInput.value = "";
    }
}

orderTypeSelect.addEventListener("change", updateAddressField);

// Correctly set the field when the page first loads.
updateAddressField();

/* PROCESS GRAPH */

function openProcess() {
    lastFocusedElement = document.activeElement;

    // Restart the animation each time the graph opens.
    processModal.classList.remove("is-open");
    void processModal.offsetWidth;

    processModal.classList.add("is-open");
    processModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    $("#closeProcess").focus();
}

function closeProcess() {
    processModal.classList.remove("is-open");
    processModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
}

$$(".process-open").forEach(button => {
    button.addEventListener("click", openProcess);
});

$("#closeProcess").addEventListener("click", closeProcess);

processModal.addEventListener("click", event => {
    if (event.target === processModal) {
        closeProcess();
    }
});

/* ORDER FORM */

const formFeedback = $("#formFeedback");
const orderSummary = $("#orderSummary");
const copyFeedback = $("#copyFeedback");

orderForm.addEventListener("submit", event => {
    event.preventDefault();

    if (!orderForm.reportValidity()) {
        return;
    }

    const name = $("#name").value.trim();
    const contact = $("#contactInfo").value.trim();
    const quantity = Number($("#quantity").value);
    const orderType = orderTypeSelect.value;
    const notes = $("#notes").value.trim();

    // Pickup orders do not need an address.
    const address = orderType === "Delivery"
        ? addressInput.value.trim()
        : "";

    if (!name || !contact) {
        formFeedback.textContent =
            "Please complete all required fields.";
        return;
    }

    if (
        !Number.isInteger(quantity) ||
        quantity < 1 ||
        quantity > 999
    ) {
        formFeedback.textContent =
            "Please enter a valid quantity.";
        return;
    }

    if (orderType === "Delivery" && !address) {
        formFeedback.textContent =
            "Please enter your delivery address.";
        addressInput.focus();
        return;
    }

    currentOrderText = [
        "BOOMSTICK ORDER REQUEST",
        "-----------------------",
        `Customer Name: ${name}`,
        `Contact Number: ${contact}`,
        `Order Type: ${orderType}`,
        `Quantity: ${quantity}`,
        `Delivery Address: ${orderType === "Delivery" ? address : "Not needed (Pickup)"}`,
        `Additional Notes: ${notes || "None"}`,
        "",
        "Please confirm availability, pricing, and order details."
    ].join("\n");

    orderSummary.textContent = currentOrderText;
    formFeedback.textContent = "";
    copyFeedback.textContent = "";

    summaryModal.classList.add("is-open");
    summaryModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    $("#closeSummary").focus();
});

/* CLOSE ORDER SUMMARY */

function closeSummary() {
    summaryModal.classList.remove("is-open");
    summaryModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    formFeedback.textContent =
        "Your order summary is ready. Copy it to share with the seller.";
}

$("#closeSummary").addEventListener("click", closeSummary);

$("#editOrder").addEventListener("click", () => {
    summaryModal.classList.remove("is-open");
    summaryModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    $("#name").focus();
});

summaryModal.addEventListener("click", event => {
    if (event.target === summaryModal) {
        closeSummary();
    }
});

/* COPY ORDER DETAILS */

$("#copyOrder").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(currentOrderText);

        copyFeedback.textContent =
            "Order details copied. You can now paste the message.";
    } catch (error) {
        const temporaryTextArea = document.createElement("textarea");

        temporaryTextArea.value = currentOrderText;
        temporaryTextArea.setAttribute("readonly", "");
        temporaryTextArea.style.position = "fixed";
        temporaryTextArea.style.opacity = "0";

        document.body.appendChild(temporaryTextArea);
        temporaryTextArea.select();

        const copied = document.execCommand("copy");
        temporaryTextArea.remove();

        copyFeedback.textContent = copied
            ? "Order details copied. You can now paste the message."
            : "Copy was blocked. Please select and copy the order details manually.";
    }
});

/* ESCAPE KEY */

document.addEventListener("keydown", event => {
    if (event.key !== "Escape") {
        return;
    }

    if (summaryModal.classList.contains("is-open")) {
        closeSummary();
    } else if (processModal.classList.contains("is-open")) {
        closeProcess();
    } else if (nav.classList.contains("open")) {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
        menuToggle.focus();
    }
});