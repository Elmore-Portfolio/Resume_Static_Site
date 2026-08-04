
# AWS Hosted Resume

This is a deployment of my personal resume hosted on AWS and utilizing the services provided.

The steps to achieve this are as follows:

1) Build the static website utilizing AWS S3

    a) Creating a HTML/CSS/Javascript codes uploaded through Github into the S3 Bucket
    
    b) Configure the S3 bucket as a static website  with public access


2) Create a customer domain name utilizing Route 53

3) Deploy the static website utilizing CloudFront and setup SSL/HTTPS

Issues that needed to be resolved:

1) Website domain was obtained @ melmore.dev , but could not access website URL.

   Solution: Had to link S3 bucket to the domain name via a new record created in the public hosted zones within Route 53
