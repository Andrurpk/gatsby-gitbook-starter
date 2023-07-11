---
title: 'Chapter 1 - Admin'
metaTitle: 'Trustle Learn - Chapter 1 - Admin'
metaDescription: 'This is the meta description for this page'
---

Introduction
This guide will walk you through the setup and operation of Trustle. It’s intended for both admins and users.

There are three chapters in the documentation:

Chapter 1 - Intro and Admin
Chapter 2 - AWS Connector
Chapter 3 - Requesting, Approving, and Provisioning Access

This is Chapter 1! The only prerequisite to following along with the documentation is to sign up for a “Trustle Teams” trial.

If you have any questions about using Trustle or this document, please contact us at support@trustle.com.

Signing up for Trustle
To sign up for Trustle, visit https://www.trustle.com/pricing. As this tutorial will cover features, only available in the Teams tier (and above), sign up for the 14-day Teams Tier free trial.

Once you are able to sign in, you are ready to begin the tutorial, beginning with the Admin menu overview.

Trustle System Tour
Why Use Trustle?
Trustle will make your company more compliant, your resources more secure, and your staff more productive. Trustle will help you:

Enable just-in-time, self-service access to accounts and resources in your organization.
Create access request workflows that provide approval processes customized to the sensitivity of the accounts and resources being accessed.
Account for, and verify ownership of every account and resource in your organization.
Provide reporting and visibility into who approved what access for someone, when, why, and for how long.
Evaluate if account and permissions are too broad user-wise, or permissions-wise.

Trustle will not:

Create or destroy entities on the remote service side. Trustle will only add/remove permissions for a user, to/from a remote resource.

The person who signs up and registers for Trustle is known as the Trustle Admin, or Trustle Organization (Org) Owner.

As Org Owner, when you login to Trustle, you will see four main menu items:

Admin
Manage
Tasks
Access

The following is a code block with JavaScript language syntax highlighting.

![Admin Menu](https://lh3.googleusercontent.com/fzcEVICU2wCoOo1FzGRP4kfI9gGJ4fYhN0enwv-BacOmgYFC952PVQpxV2OJBTgrH1QJq8OA99cFEabEtJmPJkRhu2U_dZU7I_-x-zbNbW0EbvbG-MjGYmADjKX1aG59FzeYSGAwSvl-wxVtd6Z5kUc)

## Security

The Security tab provides four sub-tabs that provide for security-related configuration options.

2.0 identity providers. Email/password is the default-enabled authentication method. This setting is Organization-wide, and affects all users.

NOTE: We’ll demonstrate setting up each authentication method later in the tutorial.

![Diagram](https://lh5.googleusercontent.com/gIZ1uYwpqIAdDGg9BNsLsw4gj_cTeXD031rS1o1ch2g9Q_jz9fb9rgjPe5shGK3QwuGoo7QggcCZq6hjJPKznO2mgXB2Sia1mGVG37SPb-EXSx3ioaGxsNHcfl94odBPLHrtyDUWXRRm5_JAx3xNm_Y)

## Sensitivity Score

The Sensitivity Score tab lets you customize your organization’s Sensitivity Score settings.

As we discussed in the beginning of the chapter, when you use Trustle for access management, the Trustle Request, Approval, and Provision workflow is enforced.

For any given workflow associated with any given resource Trustle manages, Sensitivity Scores define the resource’s:

Maximum Approval Duration
Maximum Access Duration
Approver Workflow Requirements (Manager / Owner / Executive)

The default Sensitivity Scores have sane defaults, ranging from no required approval with maximum approval and access durations of three months (Level 0), to Manager, Owner, and Executive approval required, with a maximum approval and access duration of one month (Level 4). Each level can be customized to suit your organization’s security requirements.

The default is Level 2, and this default is applied to all resources at Trustle Connector import-time. After a resource has been imported into Trustle, you can override its default sensitivity level to something different.

For example, let’s say your AWS Connector has imported two managed policies, EC2ReadOnly, and LambdaAdmin. You may consider it fine for a user to simply require manager approval, and have the default Level 2 (three months of approval and access) for EC2ReadOnly access. On the other hand, giving someone LambdaAdmin access is nearly the equivalent of giving them the keys to the kingdom, so you may choose to specifically override LambdaAdmin’s security level from its default of Level 2, to Level 3, which would require two approvers (manager and owner).

NOTE: We’ll demonstrate sensitivity levels in action, and overriding a resource’s default sensitivity level later in the documentation.

## Compliance Reports

The Compliance report sub-tab contains links to download access reports for your organization.
Compliance reports are valuable not only for regular internal reporting cycles, but also during formal audits.

The Current Access for Entire Org report will show access across all systems for all time, and the Custom Access Report will let you choose individual systems, within a custom date range.
