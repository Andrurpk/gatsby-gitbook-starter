---
title: 'Chapter 2 - AWS Connector'
metaTitle: 'Trustle Learn - Chapter 2 - AWS Connector'
metaDescription: 'This is the meta description for this page'
---

Trustle Connectors

If you have any questions about using Trustle or this document, please contact us at support@trustle.com.

Welcome to Chapter 2, Trustle Connectors!

Trustle Connectors link Trustle to your organization’s connected systems.

For example, to pull permissions and account information from your AWS accounts, you’d configure the AWS Connector, to pull Okta-related data, you’d install the Okta Connector, etc.

Installing the AWS Connector
We’ll begin with an AWS Connector use case to explore the benefits of Trustle. To enable Trustle to communicate with your AWS account, we’ll need to first install the Trustle AWS Connector.

![Systems](https://lh3.googleusercontent.com/MnSVBlHXnhC8vcRRiv7cMJriiyKiicDgBW_Ff5BJCAeuw8BLJS6c8kBSTkT3PZVvWbbpwYW30QAnTab5rrDyDURNkfMR4iT3q0VZFC9N86uJMy3kgOEuSAKVb3k0hsm6P4VOPigPzNYZsNqPK97DKK4)

Once installed and configured, the Trustle AWS connector:

Monitors AWS IAM and provides a full read-out on all accounts, privileges, and policies on the platform.
Provides security recommendations.
Implements AWS IAM permissions request workflows, and if enabled, the automated provisioning and deprovisioning of permissions based on the workflow state.
Tracks account security data and usage.
Calculates a Risk Score for each policy and account in your system.
Configuring the Trustle Connector User

NOTE: The following steps require a pre-existing AWS account to create a user in.

To provide access between the Trustle AWS Connector and your AWS account, we’ll create:

An AWS user named trustle-connector.
Two managed policies attached to trustle-connector, named trustle-read and trustle-write.
An access key pair.

The following procedure uses CloudFormation to describe and provision the trustle-connector infrastructure resources into your AWS environment in a safe, repeatable way. If you prefer to manually install the infrastructure resources, see the Manual AWS IAM User Configuration section.

Create the IAM User, Policies, and Access keys using AWS CloudFormation and AWS CLI

To create the user and policy via CloudFormation and the AWS CLI:

Login to the AWS console to the console as an admin user.
Select the region you wish to run CloudFormation from in the upper right corner of the AWS Console.
Click this link to prepopulate the Create Stack Wizard with the trustle-connector CloudFormation template.
Click the confirmation checkbox at the bottom of the page.

The Access Request, Approval, and Provision Workflow
In the above table, we discuss an Access Requestor, Approver, and Provisioner interaction. It’s important to clarify what each means in more detail, as it is the heart of the Trustle Access workflow.

![Image](https://lh4.googleusercontent.com/JmGuI2rl5wj2pwRNwSU3v2w8KiRprqFO8ERf0TQEaCJaZ1Iom5ie_PgqTmFsUReblxs2yjpAwZ49WtLY3OZtAsjjcob53uVRBMzP_1rWgfFb-4ftSUHR9ssutrnCyy7UpJE9rgM9joOplrPvLuVHEjU)

Without using Trustle, its common to simply give a user access to a resource; maybe a manager needs to approve it, maybe not; IT or Ops provisions the access using whatever method they see fit, and the user goes on to have the access forever, (maybe even after they are no longer with the company.)

When you use Trustle for access management, the Trustle Request, Approval, and Provision workflow is enforced.

A Trustle User must login to Trustle, and if never done before, they must first request access to a given resource.

Once they request access to it, an Approval process must take place. Based on how sensitive the resource has been defined to be (by Trustle Admins), they may get immediate approval, require manager approval, or require manager, resource owner, and even executive level approval.

Once approved, based on how Trustle has been configured, either Trustle itself or an intermediary process/workflow (human operator, infrastructure as code, etc) will grant the Trustle User access to a given remote resource.

The approval process carries with it two expirations: 1) the approval expiration, and 2) the access expiration.

When the provisioned access expires, based on how Trustle is configured, either Trustle itself, or IAC, or a human will issue the commands or API calls to remove the Trustle User from access to a given remote resource.

At this point, if the approval has not yet expired, then the user may simply request the access via Trustle, without the need for additional human approval – once again, based on how Trustle is configured, either Trustle itself, or IAC, or a human will issue the commands or API calls to grant the Trustle User with access to a given remote resource.

However, if the approval has expired, then the access request must once again go through the human approval process before it will be actively provisioned.

We’ll dive deeper into how these approval processes are defined later in the tutorial when we discuss Sensitivity Scores and manual access revocation, but it's important to understand the differences between Approval and Provisioned Access as we discuss the components of Trustle moving forward.

```javascript
import React from 'react';
```

Supports multiple languages.

The following is a code block with diff. Lines with `+` highlighted in green shade indicating an addition. Lines with `-` highlighted in red shade indicating a deletion.

```javascript
- const data = ['1','2'];
+ const data = [1,2];
```

## The Access Request, Approval, and Provision Workflow

In the above table, we discuss an Access Requestor, Approver, and Provisioner interaction. It’s important to clarify what each means in more detail, as it is the heart of the Trustle Access workflow.

Without using Trustle, its common to simply give a user access to a resource; maybe a manager needs to approve it, maybe not; IT or Ops provisions the access using whatever method they see fit, and the user goes on to have the access forever, (maybe even after they are no longer with the company.)

When you use Trustle for access management, the Trustle Request, Approval, and Provision workflow is enforced.

A Trustle User must login to Trustle, and if never done before, they must first request access to a given resource.

Once they request access to it, an Approval process must take place. Based on how sensitive the resource has been defined to be (by Trustle Admins), they may get immediate approval, require manager approval, or require manager, resource owner, and even executive level approval.

Once approved, based on how Trustle has been configured, either Trustle itself or an intermediary process/workflow (human operator, infrastructure as code, etc) will grant the Trustle User access to a given remote resource.

The approval process carries with it two expirations: 1) the approval expiration, and 2) the access expiration.

When the provisioned access expires, based on how Trustle is configured, either Trustle itself, or IAC, or a human will issue the commands or API calls to remove the Trustle User from access to a given remote resource.

At this point, if the approval has not yet expired, then the user may simply request the access via Trustle, without the need for additional human approval – once again, based on how Trustle is configured, either Trustle itself, or IAC, or a human will issue the commands or API calls to grant the Trustle User with access to a given remote resource.

However, if the approval has expired, then the access request must once again go through the human approval process before it will be actively provisioned.

We’ll dive deeper into how these approval processes are defined later in the tutorial when we discuss Sensitivity Scores and manual access revocation, but it's important to understand the differences between Approval and Provisioned Access as we discuss the components of Trustle moving forward.

## Introduction to our Organization

To best demonstrate Trustle’s power, we’ll base our tutorial use case on a fictional organization called Vandelay Industries.
At Vandelay, their org-chart looks like this:

The Owner, Head Honcho (your user) has already been created, and is already defined as an owner [when you created your Organization]. We can create the remaining users of our organization one at a time manually, or in bulk via CSV.

![Quick create stack](https://lh6.googleusercontent.com/lkf_OW_BG_vbVUYrM3GyJYCwBrXS2Q7VRyYlZZErQ71CJ0P6itaecg9HYd-lDS_tZ7OBU0rbJL0YgxWAxeJN4y52Xe1YqP4vztUTIUWxlGsNsEa-BElPrbM4LcO6TLODuI9RbwwMF2utv0VWfsEmgyM)
