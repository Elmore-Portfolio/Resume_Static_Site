
# AWS Hosted Resume/Portfolio @ melmore.dev

This is a deployment of my personal resume/portfolio utilizing AWS and the services provided.

## The steps to achieve this are as follows:

1) Build the static website utilizing AWS S3

    a) Creating a HTML/CSS/Javascript codes uploaded through Github into the S3 Bucket
    
    b) Configure the S3 bucket as a static website  with public access

2) Create a domain name utilizing Route 53 to use for the website

3) Deploy the static website utilizing CloudFront and setup SSL/HTTPS



## Issues that needed to be resolved:

1) S3 bucket was created with static website files, and "Block all public access" was unchecked, but I could not access the website still from the S3 bucket link.

    Solution: In the S3 bucket permissions, I had to add a bucket policy that allowed all entities to access the static website bucket via JSON code.
   
2) Website domain was obtained @ melmore.dev from Route 53, but could not access website URL.

   Solution: I had to link the S3 bucket where the static website was hosted to the domain via a new record that I created withing Route 53 public hosted zones.

3) Attempting to request a certificate from my S3 Buckets region (US-East-2 OHIO) for Cloudfront did not work.

   Solution: I had to switch to US-East-1 N. Virginia
