Description: Using Github actions to deploy in AWS EKS cluster

Steps:

1. Create an EKS Cluster using eksctl command
   //eksctl create cluster --name=GithubActionsCluster --region=us-east-1 --zones=us-east-1a,us-east-1b --without-nodegroup
   //eksctl create nodegroup --cluster=GithubActionsCluster --region=us-east-1 --name=githubactions-ng-private --node-type=t3.medium --nodes=2 --nodes-min=2 --nodes-max=4 --node-volume-size=20 --ssh-access --ssh-public-key=development --managed --asg-access --external-dns-access --full-ecr-access --appmesh-access --alb-ingress-access --node-private-networking

2. Create nodejs server
3. Create dockerfile for the nodejs server
4. Create github actions folder
