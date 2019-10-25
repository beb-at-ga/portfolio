import React from "react";
import Container from '@material-ui/core/Container'

const Projects = () => {
  return (
    <Container>
      <h1>Single Lead Scrub</h1>

      <h3>
        Strofina, Inc. <a href="http://www.strofina.com">(www.strofina.com)</a>
      </h3>
      <p>
        Using a Build and Run as a Service model, designed, developed, deployed
        and manage a web application, the Single Lead Scrub, providing direct
        marketers (phone, mail, email) a way to maintain do-not-solicit
        compliance with federal/state laws and corporate policies.
      </p>
      <h1>PCI compliant eCommerce Infrastructure on AWS with CloudFormation</h1>
      <h3>
        Sunrise Identity, LLC.
        <a href="http://www.sunriseid.com">(www.sunriseid.com)</a>
      </h3>
      <p>
        In 2017 Sunrise moved from a legacy, closed source .NET v2 eCommerce
        application to nopCommerce, an open source .NET Core application. It was
        a great opportunity to re-design the AWS hosting environment I had
        previously created that had accumulated significant technical debt over
        the years. The new environment would have some key features baked in
        from the start that were difficult to implement in the older one:{" "}
      </p>
      <ul>
        <li>
          The environment would be built to be PCI compliant from the ground up,
          leveraging the AWS PCI Reference Architecture, but implemented for
          .NET applications and SQL Server RDS.
        </li>
        <li>
          It would be built entirely from CloudFormation templates with a
          smattering of PowerShell.{" "}
        </li>
        <li>
          It would be built “isolated”, in a series of purpose built AWS
          accounts to limit the blast radius in the event of a security
          incident, to provide improved cost and billing management, and to
          begin a cloud native development journey.{" "}
        </li>
        <li>
          It would be built to support a significantly improved CI/CD pipeline.
        </li>
        <li>
          It would be built to support auto-scaling for better cost control.
        </li>
      </ul>
      <p>
        After 80K lines of CloudFormation YAML and PowerShell, the new
        environments were successfully deployed and went live in early 2018.
      </p>
      <h1>Virtualization and Cloud Migrations</h1>
      <h3>
        Sunrise Identity, LLC.
        <a href="http://www.sunriseid.com">(www.sunriseid.com)</a>
      </h3>
      <p>
        Over the course of several projects, over many years, I re-designed and
        re-implemented Sunrise's computing infrastructure from a mostly
        on-premises and purely physical one, to an AWS “all-in” strategy circa
        2017. Starting in 2009, I began with a migration from all physical
        infrastructure in one facility to a hybrid of VMWare on-premises and AWS
        (EC2) as we moved our corporate offices in 2010. After successfully
        running this hybrid environment for a few years, I convinced our
        management team to go “all-in” on AWS. The gains in reliability, speed
        of implementations/upgrades and peace of mind that came with improved
        disaster recovery and security were the key drivers. Other options, such
        as Azure, Google, or IBM Cloud, were not viable options during that time
        and co-lo facilities were capital intensive. AWS provided a valuable set
        of tools for a small, dynamic company in an industry where growth was
        difficult to forecast.
      </p>
    </Container>
  );
};

export default Projects;
