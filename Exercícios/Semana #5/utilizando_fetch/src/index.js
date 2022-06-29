import "core-js"
import "regenerator-runtime/runtime"

import SentryObject from "./sentry_object"

import { getSentryObjects } from "./sentry_consume_servicer"

async function loadSentryObjects() {
    let sentryObjects = []
    let sentryObjectsJSON = await getSentryObjects()

    sentryObjectsJSON.forEach(sentry => {
        const newSentry = new SentryObject(
            sentry["sentryId"],
            sentry["fullname"],
            sentry["year_range_min"],
            sentry["year_range_max"]
        )
        sentryObjects.push(newSentry)
    })
    renderSentryObjects(sentryObjects)
}

function renderSentryObjects(sentryObjects) {
    const olElement = document.getElementById("sentry-objects")
    sentryObjects.forEach(sentry => {
        const liElement = document.createElement("li")
        const text = `ID: (${sentry.sentryId}) | Name: ${sentry.name}: risco de colisão entre ${sentry.yearMin} e ${sentry.yearMax}`
        liElement.innerText = text
        olElement.appendChild(liElement)
    })
}

loadSentryObjects()