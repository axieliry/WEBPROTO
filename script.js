
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

/* ELEMENTS */

const menuToggle = $("#menuToggle");
const nav = $("#nav");

const processModal = $("#processModal");
const summaryModal = $("#summaryModal");
const confirmationModal = $("#confirmationModal");

const orderForm = $("#orderForm");
const orderTypeSelect = $("#orderType");
const addressGroup = $("#addressGroup");
const addressInput = $("#address");

const formFeedback = $("#formFeedback");
const orderSummary = $("#orderSummary");

const confirmOrderButton = $("#confirmOrder");
const editOrderButton = $("#editOrder");
const closeSummaryButton = $("#closeSummary");
const closeProcessButton = $("#closeProcess");
const finishOrderButton = $("#finishOrder");

let currentOrderText = "";
const previousFocus = new Map();

/* MOBILE NAVIGATION */

function closeNavigation(restoreFocus = false) {
    if (!nav || !menuToggle) return;

    nav.classList.remove("open");
    nav.classList.remove("is-open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.textContent = "☰";

    if (restoreFocus) {
        menuToggle.focus();
    }
}

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = !nav.classList.contains("open");

        nav.classList.toggle("open", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
        menuToggle.textContent = isOpen ? "×" : "☰";
    });

    $$(".nav a, #nav a").forEach(link => {
        link.addEventListener("click", () => closeNavigation());
    });

    document.addEventListener("click", event => {
        if (
            nav.classList.contains("open") &&
            !nav.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            closeNavigation();
        }
    });
}

/* CURRENT YEAR */

const yearElement = $("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* DELIVERY AND PICKUP ADDRESS */

function updateAddressField() {
    if (!orderTypeSelect || !addressGroup || !addressInput) return;

    const isDelivery = orderTypeSelect.value === "Delivery";

    addressGroup.hidden = !isDelivery;
    addressInput.required = isDelivery;

    if (isDelivery) {
        addressInput.setAttribute("aria-required", "true");
    } else {
        addressInput.removeAttribute("aria-required");
        addressInput.value = "";
        addressInput.setCustomValidity("");
    }
}

if (orderTypeSelect) {
    orderTypeSelect.addEventListener("change", updateAddressField);
}

updateAddressField();

/* MODAL MANAGEMENT */

function getOpenModal() {
    return [confirmationModal, summaryModal, processModal].find(
        modal => modal?.classList.contains("is-open")
    ) || null;
}

function syncModalState() {
    document.body.classList.toggle("modal-open", Boolean(getOpenModal()));
}

function openModal(modal, focusSelector) {
    if (!modal) {
        console.error("Cannot open modal: modal element was not found.");
        return false;
    }

    const currentlyOpen = getOpenModal();

    if (currentlyOpen && currentlyOpen !== modal) {
        currentlyOpen.classList.remove("is-open");
        currentlyOpen.setAttribute("aria-hidden", "true");
    }

    if (!previousFocus.has(modal)) {
        previousFocus.set(modal, document.activeElement);
    }

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");

    syncModalState();

    const focusTarget = focusSelector
        ? $(focusSelector, modal)
        : null;

    if (focusTarget) {
        focusTarget.focus();
    }

    return true;
}

function closeModal(modal, restoreFocus = true) {
    if (!modal) return;

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");

    syncModalState();

    const elementToRestore = previousFocus.get(modal);
    previousFocus.delete(modal);

    if (
        restoreFocus &&
        elementToRestore &&
        elementToRestore.isConnected
    ) {
        elementToRestore.focus();
    }
}

/* PROCESS MODAL */

function openProcess() {
    openModal(processModal, "#closeProcess");
}

function closeProcess() {
    closeModal(processModal);
}

$$(".process-open").forEach(button => {
    button.addEventListener("click", openProcess);
});

if (closeProcessButton) {
    closeProcessButton.addEventListener("click", closeProcess);
}

if (processModal) {
    processModal.addEventListener("click", event => {
        if (event.target === processModal) {
            closeProcess();
        }
    });
}

/* ORDER FORM AND SUMMARY */

if (orderForm) {
    orderForm.addEventListener("submit", event => {
        event.preventDefault();

        if (!orderForm.reportValidity()) return;

        const name = $("#name")?.value.trim() || "";
        const contact = $("#contactInfo")?.value.trim() || "";
        const quantityValue = $("#quantity")?.value.trim() || "";
        const quantity = Number(quantityValue);
        const orderType = orderTypeSelect?.value || "";
        const notes = $("#notes")?.value.trim() || "";

        const address = orderType === "Delivery"
            ? addressInput?.value.trim() || ""
            : "";

        if (!name || !contact) {
            if (formFeedback) {
                formFeedback.textContent =
                    "Please complete your name and contact information.";
            }
            return;
        }

        if (
            quantityValue === "" ||
            !Number.isInteger(quantity) ||
            quantity < 1 ||
            quantity > 999
        ) {
            if (formFeedback) {
                formFeedback.textContent =
                    "Please enter a whole-number quantity between 1 and 999.";
            }

            $("#quantity")?.focus();
            return;
        }

        if (!["Delivery", "Pickup"].includes(orderType)) {
            if (formFeedback) {
                formFeedback.textContent =
                    "Please select Delivery or Pickup.";
            }
            return;
        }

        if (orderType === "Delivery" && !address) {
            if (formFeedback) {
                formFeedback.textContent =
                    "Please enter your delivery address.";
            }

            addressInput?.focus();
            return;
        }

        currentOrderText = [
            "BOOMSTICK ORDER REQUEST",
            "-----------------------",
            `Customer Name: ${name}`,
            `Contact Information: ${contact}`,
            `Order Type: ${orderType}`,
            `Quantity: ${quantity}`,
            `Delivery Address: ${
                orderType === "Delivery"
                    ? address
                    : "Not required (Pickup)"
            }`,
            `Additional Notes: ${notes || "None"}`,
            "",
            "Please confirm availability, pricing, and order details."
        ].join("\n");

        if (orderSummary) {
            orderSummary.textContent = currentOrderText;
        }

        if (formFeedback) {
            formFeedback.textContent = "";
        }

        openModal(summaryModal, "#closeSummary");
    });
}

/* CLOSE ORDER SUMMARY */

function closeSummary() {
    closeModal(summaryModal);

    if (formFeedback) {
        formFeedback.textContent =
            "Your order details are still here. You can review or edit them.";
    }
}

if (closeSummaryButton) {
    closeSummaryButton.addEventListener("click", closeSummary);
}

if (summaryModal) {
    summaryModal.addEventListener("click", event => {
        if (event.target === summaryModal) {
            closeSummary();
        }
    });
}

/* EDIT ORDER */

if (editOrderButton) {
    editOrderButton.addEventListener("click", () => {
        closeModal(summaryModal, false);
        $("#name")?.focus();
    });
}

/* CONFIRM ORDER */

if (confirmOrderButton) {
    confirmOrderButton.addEventListener("click", () => {
        if (!currentOrderText) {
            if (formFeedback) {
                formFeedback.textContent =
                    "Please complete the order form first.";
            }

            closeModal(summaryModal, false);
            $("#name")?.focus();
            return;
        }

        if (!confirmationModal) {
            console.error(
                'Confirmation popup not found. Check that index.html contains id="confirmationModal".'
            );

            if (formFeedback) {
                formFeedback.textContent =
                    "The confirmation popup could not be opened. Please check the website code.";
            }

            return;
        }

        // Close the summary without restoring focus to its button.
        closeModal(summaryModal, false);

        // Open the confirmation popup.
        openModal(confirmationModal, "#finishOrder");
    });
}

/* FINISH ORDER */

if (finishOrderButton) {
    finishOrderButton.addEventListener("click", () => {
        closeModal(confirmationModal, false);

        if (orderForm) {
            orderForm.reset();
        }

        currentOrderText = "";

        // Restore the correct address field for the default order type.
        updateAddressField();

        if (formFeedback) {
            formFeedback.textContent =
                "Demo order confirmed. No order was actually sent or saved.";
        }

        $("#name")?.focus();
    });
}

/* CLOSE CONFIRMATION BY CLICKING OUTSIDE */

if (confirmationModal) {
    confirmationModal.addEventListener("click", event => {
        if (event.target === confirmationModal) {
            closeModal(confirmationModal);
        }
    });
}

/* ESCAPE KEY */

document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;

    if (confirmationModal?.classList.contains("is-open")) {
        closeModal(confirmationModal);
        return;
    }

    if (summaryModal?.classList.contains("is-open")) {
        closeSummary();
        return;
    }

    if (processModal?.classList.contains("is-open")) {
        closeProcess();
        return;
    }

    if (nav?.classList.contains("open")) {
        closeNavigation(true);
    }
});
