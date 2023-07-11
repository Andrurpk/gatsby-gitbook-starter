---
title: 'Chapter 3 - Provisioning'
metaTitle: 'Trustle Learn - Chapter 3 - Provisioning'
metaDescription: 'This is the meta description for this page'
---

Requesting, Approving, and Provisioning Access
If you have any questions about using Trustle or this document, please contact us at support@trustle.com.

Welcome to Chapter 3, Requesting, Approving, and Provisioning Access!

As discussed in Chapter 1, when you use Trustle for access management, the Trustle Request, Approval, and Provision (RAP) workflow is enforced.

A Trustle User must login to Trustle, and if never done before, they must first request access to a given resource.

Once they request access to it, an Approval process must take place. Based on how sensitive the resource has been defined to be (by Trustle Admins), they may get immediate approval, require manager approval, or require manager, resource owner, and even executive level approval.

Once approved, based on how Trustle is configured, either Trustle itself, or IAC, or a human will issue the commands or API calls to grant the Trustle User with access to a given remote resource.

The approval process carries with it two expirations: 1) the approval expiration, and 2) the access expiration.

![Requesting Access](https://lh6.googleusercontent.com/WiXxfKT3gwQgTmBqczUkLRVz9jWehI4e4jA09LPES8M1Q9AyFwHYq9H2ExknYAks_67ZqClG_c09p7Kch2VqGYqppJWtxetDQUuV1JmpU6C8Q_CFE5vsFKRC8mki3yjU-8Jm67qKySHP7u-0IOzG3hQ)

When the provisioning expires, based on how Trustle is configured, either Trustle itself, or IAC, or a human will issue the commands or API calls to remove the Trustle User from access to a given remote resource.

At this point, if the approval has not yet expired, then the user may simply request the access via Trustle, without the need for additional human approval – once again, based on how Trustle is configured, either Trustle itself, or IAC, or a human will issue the commands or API calls to grant the Trustle User with access to a given remote resource.

However, if the approval has expired, then the access request must once again go through the human approval process before it will be actively provisioned.

In this chapter, we’ll walk through some workflow examples to get you better familiar with the process.

Reviewing Sensitivity Score Settings

As discussed earlier in Chapter 1, the Sensitivy Score settings define specific aspects of the RAP workflow, specifically the number of approvers, approval, and provisioned access durations.

Navigate back to Admin -> Security -> Security settings.

Viewing the default settings:

## Requesting Access

Alice’s Screen looks slightly different from the Admin’s screen, most notably, because she is missing the Admin menu item. However, as an employee, she is able to import and act as owners of any systems she may manage via the Manage menu item, just like the Admin user did when importing AWS.

![GraphQL over HTTP](https://lh6.googleusercontent.com/cl_9OoPyNhWHq8Umk1_7sdM6ulq8moRAL1ygc2C_vBC00fEsQTFB6sFK_bAruYrSxGL92RJ6ISE3207P1b-BLx6tJO2b9gZf6PG5WSx_WRnMUKIV-_I4j6kb0PZWb690psCN4XWobJCWNKUaoktgW48)
